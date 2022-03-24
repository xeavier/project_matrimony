import config from '../../config.js';
import Stripe from 'stripe';
const stripe = new Stripe(config.stripe.secretKey);
import request from 'request';
import User from '../../models/userModel.js';
import express from 'express';
import cors from 'cors';
import querystring from 'querystring';
import { isAuth, isAdmin } from '../../util.js';
//import User from '../models/userModel';

const router = express.Router();
router.use((req,res,next)=>{
	
	next()
  })

router.get('/signin-steps', isAuth, isAdmin, (req, res) => {
	let step = 'account';
	// Naive way to identify which step we're on: check for the presence of user profile data
	if (req.user) {
	  if (
		req.user.type === 'individual'
		  ? !req.user.firstName || !req.user.lastName
		  : !req.user.businessName
	  ) {
		step = 'profile';
	  } else if (!req.user.stripeAccountId) {
		step = 'payments';
	  } else {
		step = 'done';
	  }
	}
	console.log({step: step});
	console.log('step called');
	res.send( {step: step});
  });

/**
 * GET /pilots/stripe/authorize
 *
 * Redirect to Stripe to set up payments.
 */
router.get('/authorize', isAuth, isAdmin, cors(),(req, res) => {
	// Generate a random string as `state` to protect from CSRF and include it in the session
	req.session.user = req.user._id
	req.session.state = Math.random()
	  .toString(36)
	  .slice(2);
	// Define the mandatory Stripe parameters: make sure to include our platform's client ID
	let parameters = {
	  client_id: config.stripe.clientId,
	  state: req.session.state,
	  id: req.user._id
	};
	let header = {
			id: req.user._id 
	  };
	// Optionally, the Express onboarding flow accepts `first_name`, `last_name`, `email`,
	// and `phone` in the query parameters: those form fields will be prefilled
	parameters = Object.assign(parameters, {
	  redirect_uri: config.publicDomain + '/api/seller/token/' + req.user._id,
	  'stripe_user[business_type]': req.user.type || 'individual',
	  'stripe_user[business_name]': req.user.businessName || undefined,
	  'stripe_user[first_name]': req.user.first_name || undefined,
	  'stripe_user[last_name]': req.user.last_name || undefined,
	  'stripe_user[email]': req.user.email || undefined,
	  'stripe_user[country]': req.user.address_country_code || undefined
	  // If we're suggesting this account have the `card_payments` capability,
	  // we can pass some additional fields to prefill:
	  // 'suggested_capabilities[]': 'card_payments',
	  // 'stripe_user[street_address]': req.user.address || undefined,
	  // 'stripe_user[city]': req.user.city || undefined,
	  // 'stripe_user[zip]': req.user.postalCode || undefined,
	  // 'stripe_user[state]': req.user.city || undefined,
	});
	console.log('Starting Express flow:', parameters);
	// Redirect to Stripe to start the Express onboarding flow
	res.send(
		config.stripe.authorizeUri + '?' + querystring.stringify(parameters)
	);
	//window.location.href = config.stripe.authorizeUri + '?' + querystring.stringify(parameters)
	console.log(config.stripe.authorizeUri + '?' + querystring.stringify(parameters))
	console.log({redirect_uri: config.publicDomain + '/api/seller/token/' + req.user._id,})
	
  });
  
  /**
 * GET /pilots/stripe/token
 *
 * Connect the new Stripe account to the platform account.
 */
router.get('/token', async (req, res, next) => {
	const userId = req.session.user
	const user = await User.findById(userId);
	//res.setHeader({Authorization: 'Bearer ' + 'jbljbjkjkjkbj' })
	// Check the `state` we got back equals the one we generated before proceeding (to protect from CSRF)
	if (req.session.state != req.query.state) {
		return res.redirect('http://localhost:3000/signin');
	  }
	  try {
		// Post the authorization code to Stripe to complete the Express onboarding flow
		const expressAuthorized = await stripe.oauth.token({
			grant_type: 'authorization_code',
			client_id: config.stripe.clientId,
			client_secret: config.stripe.secretKey,
			code: req.query.code
		  /*uri: config.stripe.tokenUri, 
		  form: { 
			grant_type: 'authorization_code',
			client_id: config.stripe.clientId,
			client_secret: config.stripe.secretKey,
			code: req.query.code
		  },
		  json: true*/
		})
	
		if (expressAuthorized.error) {
		  throw(expressAuthorized.error);
		}
	
		// Update the model and store the Stripe account ID in the datastore:
		// this Stripe account ID will be used to issue payouts to the pilot
		//req.user.stripeAccountId = expressAuthorized.stripe_user_id;
		console.log(expressAuthorized.stripe_user_id)//acct_1ICSlv2Hq7thdf1V
		user.stripeAccountId = expressAuthorized.stripe_user_id
		await user.save();
	
		// Redirect to the Rocket Rides dashboard
		if(expressAuthorized.stripe_user_id){
			res.setHeader('Content-Type', 'text/html');
			return res.redirect('http://localhost:3000/profile');
		}
	  } catch (err) {
		console.log('The Stripe onboarding process has not succeeded.');
		next(err);
	  }
	console.log('tocken called')
  });
  
  /**
   * GET /pilots/stripe/dashboard
   *
   * Redirect to the pilots' Stripe Express dashboard to view payouts and edit account details.
   */
  router.get('/link', isAuth, isAdmin, async (req, res) => {
	const seller = req.user;
	console.log('err');
	try {
	  // Generate a unique login link for the associated Stripe account to access their Express dashboard
	  const loginLink = await stripe.accounts.createLoginLink(
		seller.stripeAccountId, {
		  redirect_url: 'http://localhost:3000/dashboard'
		}
	  );
	  // Directly link to the account tab
	  if (req.query.account) {
		loginLink.url = loginLink.url + '#/account';
	  }
	  
	  return res.send(loginLink.url);
	} catch (err) {
	  console.log(err);
	  console.log('Failed to create a Stripe login link.');
	}
  });
  
  router.get('/payout', isAuth, isAdmin, async (req, res) => {
	const seller = req.user;
	try {
	  // Fetch the account balance to determine the available funds
	  const balance = await stripe.balance.retrieve({
		stripe_account: seller.stripeAccountId,
	  });
	  // This demo app only uses USD so we'll just use the first available balance
	  // (Note: there is one balance for each currency used in your application)
	  const {amount, currency} = balance.available[0];
	  // Create an instant payout
	  const payout = await stripe.payouts.create(
		{
		  amount: amount,
		  currency: currency,
		  statement_descriptor: config.appName,
		},
		{
		  stripe_account: seller.stripeAccountId,
		}
	  );
	} catch (err) {
	  console.log(err);
	}
	res.send('http://localhost:3000/dashboard/payments');
  });

  router.get('/stripe_dashboard', isAuth, isAdmin, async (req, res) => {
	const seller = req.user;
	// Retrieve the balance from Stripe
	const balance = await stripe.balance.retrieve({
		stripeAccount: seller.stripeAccountId,
	});
	// Fetch the pilot's recent rides

	const account = await stripe.accounts.create({
		type: 'standard',
	  });
	  console.log(account)
	// There is one balance for each currencies used: as this 
	// demo app only uses USD we'll just use the first object
	res.send({
	  balanceAvailable: balance.available[0].amount,
	  balancePending: balance.pending[0].amount,
	  balanceCurrency: getCurrencySymbol(balance.available[0].currency)
	});
  });

  router.get('/verified', isAuth, isAdmin, async(req, res) => {
	  const seller = req.user

	  const stripeVerified =  isStripeVerified(seller);

	  async function isStripeVerified (seller)  {
		if(seller.stripeVerified){
		  return {verified: true}
		}
		 const stripeAccount = await stripe.account.retrieve(seller.stripeVerified)
		 
		 if(!stripeAccount.details_submitted){
			return {verified: true}
		 }
		 if(stripeAccount.requirements.details_reason){
			return {verified: false, reason : stripeAccount.requirements.disabled_reason};
		 } else {
			 seller.set({stripeVerified: true});
			 await seller.save()
			 return {verified: true};
		 }
	  }
	
	  
	  res.send({
		  stripeVerified: stripeVerified.verified,
		  stripeVerifiedReason: stripeVerified.reason || null
	  })
  });

  
  router.get('/creatlink', isAuth, async (req, res) => {
	const user = req.user;
	const accountLinks = await stripe.accountLinks.create({
		account: user.stripeAccountId,
		refresh_url: 'https://example.com/reauth',
		return_url: 'https://example.com/return',
		type: 'account_onboarding',
		collect: 'eventually_due',
	  });
	res.send(accountLinks);
	});

// Helper function: get the currency symbol for the given country ISO code
const getCurrencySymbol = currency => {
	const currencySymbol = new Intl.NumberFormat('en', {
	  currency,
	  style: 'currency'
	}).formatToParts(0).find(part => part.type === 'currency');
	return currencySymbol && currencySymbol.value;
  }
  
  export default router;