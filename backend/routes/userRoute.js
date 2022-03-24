import express from 'express';
import User from '../models/userModel';
import Profile from '../models/profileModel';
import Prefernce from '../models/preferenceModel';
import config from '../config';
import Stripe from 'stripe';
const stripe = new Stripe(config.stripe.secretKey);
import { getToken, isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({})//.populate('store');
  //console.log(users)
  console.log("users")
  res.send(users);
});

router.put('/:id', isAuth, async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  //console.log(req.body.religion)
  if (user) {
    user.basicInfo.dob = req.body.dob || user.basicInfo.dob;
    user.basicInfo.religion = req.body.religion || user.basicInfo.religion,
    user.basicInfo.motherTongue = req.body.mothertongue || user.basicInfo.motherTongue,

    user.religionInfo.caste = req.body.caste || user.religionInfo.caste;
    user.religionInfo.isWillingFromMarryOtherCommunities = req.body.isWillingFromMarryOtherCommunities || user.religionInfo.isWillingFromMarryOtherCommunities;
    user.religionInfo.subCaste = req.body.subcaste || user.religionInfo.subCaste;

    user.personalInfo.martialStatus = req.body.martialStatus || user.personalInfo.martialStatus;
    user.personalInfo.height = req.body.height || user.personalInfo.height;
    user.personalInfo.familStatus = req.body.familStatus || user.personalInfo.familStatus;
    user.personalInfo.familyType = req.body.familyType || user.personalInfo.familyType;
    user.personalInfo.familyValue = req.body.familyvalue || user.personalInfo.familyValue;
    user.personalInfo.isDisability = req.body.isDisability || user.personalInfo.isDisability;

    user.professionalInfo.highestEducation = req.body.HighestEducation || user.professionalInfo.highestEducation;
    user.professionalInfo.employedIn = req.body.Employedin || user.professionalInfo.employedIn;
    user.professionalInfo.occupation = req.body.Occupation || user.professionalInfo.occupation;
    user.professionalInfo.annualIncome.currency = req.body.currency || user.professionalInfo.annualIncome.currency;
    user.professionalInfo.annualIncome.amount = req.body.amount || user.professionalInfo.annualIncome.amount;
    user.professionalInfo.workLocation.country = req.body.country || user.professionalInfo.workLocation.country;
    user.professionalInfo.workLocation.state = req.body.state || user.professionalInfo.workLocation.state;
    user.professionalInfo.workLocation.city = req.body.city || user.professionalInfo.workLocation.city;

    user.aboutMe = req.body.about || user.aboutMe;

    const updatedUser = await user.save();
  res.send({
    _id: updatedUser.id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
    basicInfo: {
      dob: updatedUser.basicInfo.dob,
      religion: updatedUser.basicInfo.religion,
      motherTongue: updatedUser.basicInfo.motherTongue,
    },
    religionInfo: {
      caste: updatedUser.religionInfo.caste,
      isWillingFromMarryOtherCommunities: updatedUser.religionInfo.isWillingFromMarryOtherCommunities,
      subCaste: updatedUser.religionInfo.subCaste,
      gothram: '',
      dosham: '',
    },
    personalInfo: {
      martialStatus: updatedUser.personalInfo.martialStatus,
      height:updatedUser.personalInfo.height,
      familyStatus: updatedUser.personalInfo.familStatus,
      familyType: updatedUser.personalInfo.familyType,
      familyValue: updatedUser.personalInfo.familyValue,
      isDisability: updatedUser.personalInfo.isDisability,
    },
    professionalInfo: {
      highestEducation: updatedUser.professionalInfo.highestEducation,
      employedIn:updatedUser.professionalInfo.employedIn,
      occupation: updatedUser.professionalInfo.occupation,
      annualIncome: { 
        currency: updatedUser.professionalInfo.annualIncome.currency,
        amount: updatedUser.professionalInfo.annualIncome.amount,
      },
      workLocation: { 
        country: updatedUser.professionalInfo.workLocation.country,
        state: updatedUser.professionalInfo.workLocation.state,
        city: updatedUser.professionalInfo.workLocation.city,
      },
    },
    aboutMe: updatedUser.aboutMe,
    token: getToken(updatedUser),
  });
  console.log(updatedUser)
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});

router.post('/signin', async (req, res) => {
  console.log(req.body.email)
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      profileid: signinUser.profileid,
      preferenceid: signinUser.preferenceid,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: false,
    profileFor: req.body.profileFor,
    gender: req.body.gender,
  });
  const newUser = await user.save();

  const profile = new Profile({
    user: newUser.id,
  });
  const preference = new Prefernce({
    user: newUser.id,
  });

  const newprofile = await profile.save();
  const newpreference = await preference.save();
  newUser.profileid = newprofile._id;
  newUser.preferenceid = newpreference._id;
  user.save();
  profile.save();
  preference.save();
  
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      profileid: newUser.profileid,
      preferenceid: newUser.preferenceid,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid User Data.' });
  }
});

router.post('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: true,
      type: 'pilot-type',
      'pilot-type': undefined,
      // store: null,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        type: newsUser.type,
        //store: newUser.store,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
  } catch (error) {
    res.send({ message: error.message });
  }

});


router.get('/ad', async (req, res) => {
  const signinUser = await User.findOne({
    email: "admin@example.com",
    password: "12345678",
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});

router.get('/link', isAuth, async (req, res) => {
  const u = req.user;
  const user = await User.findOne({
    id: u._id
  });
  try {
    // Generate a unique login link for the associated Stripe account to access their Express dashboard
    const loginLink = await stripe.accounts.createLoginLink(
      user.stripeAccountId, {
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
export default router;
