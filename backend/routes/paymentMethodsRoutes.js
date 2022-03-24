import express from 'express';
import config from '../config.js';
const router = express.Router();
// This is a sample test API key.
import Stripe from 'stripe';
const stripe = new Stripe(config.stripe.secretKey);


router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 200,
    currency: "eur",
    payment_method_types: [
      "giropay",
      "eps",
      "p24",
      "sofort",
      "sepa_debit",
      "card",
      "bancontact",
      "ideal",
    ],
  });
console.log({
    clientSecret: paymentIntent.client_secret,
  })
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

export default router;