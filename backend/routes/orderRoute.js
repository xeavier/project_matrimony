import config from '.././config';
import Stripe from 'stripe';
const stripe = new Stripe(config.stripe.secretKey);
import express from 'express';
import Order from '../models/orderModel';
import User from '../models/userModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const orders = await Order.find({sellerId: req.user._id}).populate('product');
  res.send(orders);
  console.log(orders);
});
router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});

router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

router.post("/", isAuth, async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    sellerId: req.body.sellerId,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});

/*router.put("/:id/pay", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: 'stripe',
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID
      }
    }
    const updatedOrder = await order.save();
    console.log(updatedOrder)
    res.send({ message: 'Order Paid.', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order not found.' })
  }
});

router.post('/:id/pay', isAuth, async (req, res, next) => {
  const user = req.user;
  const order = await Order.findById(req.params.id);
  const seller = await User.findById(order.sellerId);

  try {
    // Get a test source, using the given testing behavior
    let source;
    if (req.body.immediate_balance) {
      source = getTestSource('immediate_balance');
    } else if (req.body.payout_limit) {
      source = getTestSource('payout_limit');
    }
    // Create a charge and set its destination to the pilot's account
    const charge = await stripe.charges.create({
      source: source,
      amount: order.totalPrice,
      currency: 'USD',
      description: config.appName,
      statement_descriptor: config.appName,
      // The destination parameter directs the transfer of funds from platform to pilot
      transfer_data: {
        // Send the amount for the pilot after collecting a 20% platform fee:
        // the `amountForPilot` method simply computes `ride.amount * 0.8`
        amount: order.amountForSeller(),
        // The destination of this charge is the pilot's Stripe account
        destination: seller.stripeAccountId,
      },
    });
    // Add the Stripe charge reference to the ride and save it
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentID = charge.id;
    order.save();
  } catch (err) {
    console.log(err);
    // Return a 402 Payment Required error code
    res.sendStatus(402);
    next(`Error adding token to customer: ${err.message}`);
  }
  res.redirect('/pilots/dashboard');
});*/
router.post("/:id/create-payment-intent", isAuth, async (req, res) => {
  console.log(req.params.id)
  const order = await Order.findOne({ _id: req.params.id });
  const seller = await User.findById(order.sellerId);
  let p = await order.orderItems.find(item => item.price);
  let price = await p.price
  await console.log(order.totalPrice)

  // Get a test source, using the given testing behavior
  let source = 'tok_visa';
  if (req.body.immediate_balance) {
    source = getTestSource('immediate_balance');
  } else if (req.body.payout_limit) {
    source = getTestSource('payout_limit');
  }
  // Create a PaymentIntent with the order amount and currency
  if(order){
    const paymentIntents  = await stripe.paymentIntents.create({
      amount: order.totalPrice,
      currency: 'usd',
      description: 'Software development services',
      shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: order.shipping.address,
          postal_code: order.shipping.postalCode,
          city: order.shipping.city,
          state: 'USA',
          country: order.shipping.country,
        },
      },
      /*transfer_data: {
        amount: order.totalPrice,
        destination: seller.stripeAccountId,
      },*/
      //source: source,
      //application_fee_amount: 123,
      //payment_method_types: ['card'],
    });
    /*const transfer = await stripe.transfers.create({
      amount: order.totalPrice,
      currency: 'inr',
      destination: seller.stripeAccountId,
      transfer_group: req.params.id
    })*/
    //order.isPaid = true;
    //order.stripeChargeId = paymentIntents.id;
    //order.paidAt = Date.now();
    //const updatedOrder = await order.save();
    console.log("payment called")
    console.log(paymentIntents)
    res.send({
      paymentIntents 
    });
  }
  //console.log({paymentIntent})
});

// Function that returns a test card token for Stripe
function getTestSource(behavior) {
  // Important: We're using static tokens based on specific test card numbers
  // to trigger a special behavior. This is NOT how you would create real payments!
  // You should use Stripe Elements or Stripe iOS/Android SDKs to tokenize card numbers.
  // Use a static token based on a test card: https://stripe.com/docs/testing#cards
  var source = 'tok_visa';
  // We can use a different test token if a specific behavior is requested
  if (behavior === 'immediate_balance') {
    source = 'tok_bypassPending';
  } else if (behavior === 'payout_limit') {
    source = 'tok_visa_triggerTransferBlock';
  }
  return source;
}
export default router;