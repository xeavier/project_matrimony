import express from 'express';
import { isAuth, isAdmin } from '../../util.js';
//import User from '../models/userModel';

const router = express.Router();



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