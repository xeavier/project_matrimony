import express from 'express';
import Payment from '../models/paymentModel';
import { isAuth, isAdmin } from '../util';
import User from '../models/userModel';

const router = express.Router();


router.get('/', async (req, res) => {
  const stores = await Payment.find({}).populate('user');
  //console.log(`Stores List called By ${req.user._id}: ${req.user.name}`)
  console.log(" all called")
  res.send(stores);
});

router.get('/:id', async (req, res) => {
	const store = await Payment.findOne({_id: req.params.id});
	if (store) {
	  console.log(store)
	  res.send(store);
	} else {
	  res.status(404).send({ message: 'Store Not Found.' });
	}
  });