import express from 'express';
import { isAuth, isAdmin } from '../util';
import Profile from '../models/profileModel';
import User from '../models/userModel';

const router = express.Router();

  router.post('/', isAuth, async (req, res) => {
	  console.log("vivvv")
     const userId = req.user._id;
     const user = await User.findById(userId);
     const profile = new Profile({
      basicInformation: {
        bodyType: req.body.bodyType,
        weight:req.body.weight,
        collegeOrInstitution: req.body.c_i,
        organization: req.body.Organization,
      },
      lifestyleInfo: {
        eatingHabit: req.body.eatingh,
        drinkingHabit:req.body.drikingh,
        smokingHabit: req.body.smokingh,
      },
      religionInfo: {
        star: req.body.star,
        raasi:req.body.raasi,
      horoscopeInfo: {
        timeOfBirth: { 
          hrs: req.body.hrs,
          mins: req.body.mins,
          period: req.body.period,
         },
        placeOfBirth:{ 
          bcountry: req.body.country,
          bstate: req.body.state,
          bcity: req.body.city,
         },
        }
      },
      familyInfo: {
        fatherStatus: req.body.fatherstatus,
        motherStatus:req.body.motherstatus,
        brothers: { 
          noOfBrothers: req.body.noOfBrothers,
          brotherStatus:req.body.brothersstatus,
        },
        sisters:{ 
          noOfSisters: req.body.noOfSisiters,
          sistersStatus:req.body.sistersstatus,
         },
        familyLocation: {
          isMyLocation: req.body.sistersstatus || false,
          isDifferentLocation: req.body.isdifferent ,
          place:{ 
            country: req.body.pcountry,
            state: req.body.pstate,
            city: req.body.pcity,
           },
        },
        parentsContactNo: {
          country_code: req.body.pcountrycode,
          number: req.body.pmobile,
        },
        ancestralOrigin: req.body.Ancestral,
      },
      user: req.user._id,
     }); 
    if(profile){
      profile.save()
      res.send(profile);
      console.log(profile)
    }
  }); 

  // router.get('/:id/mine', async (req, res) => {
  //   const pages = await Page.find({ owner: req.params.id });
  //   console.log('pages')
  //   if (pages) {
  //     console.log(pages)
  //     res.send(pages);
  //   } else {
  //     res.status(404).send({ message: 'pages Not Found.' });
  //   }
  // });

  router.get('/:id' , async (req, res) => {
    console.log(req.params.id)
    const profile = await Profile.findOne({_id: req.params.id});
    console.log(profile)
    if (profile) {
      res.send(profile);
    } else {
      res.status(404).send({ message: 'profile Not Found.' });
    }
  });

  router.put('/:id', async (req, res) => {
    console.log('profile')
    const profileid = req.params.id;
    const profile = await Profile.findById(profileid);
    console.log(req.body )
    if (profile) {
      profile.basicInformation.bodyType =  req.body.bodyType || profile.basicInformation.bodyType
      profile.basicInformation.weight = req.body.weight || profile.basicInformation.weight
      profile.basicInformation.collegeOrInstitution =  req.body.c_i || profile.basicInformation.collegeOrInstitution 
      profile.basicInformation.organization =  req.body.Organization || profile.basicInformation.organization
      profile.lifestyleInfo.eatingHabit =  req.body.eatingh || profile.lifestyleInfo.eatingHabit
      profile.lifestyleInfo.drinkingHabit = req.body.drikingh || profile.lifestyleInfo.drinkingHabit
      profile.lifestyleInfo.smokingHabit =  req.body.smokingh || profile.lifestyleInfo.smokingHabit
      profile.religionInfo.star =  req.body.star || profile.religionInfo.star
      profile.religionInfo.raasi = req.body.raasi || profile.religionInfo.raasi 
      profile.religionInfo.horoscopeInfo.timeOfBirth.hrs = req.body.hrs || profile.religionInfo.horoscopeInfo.timeOfBirth.hrs
      profile.religionInfo.horoscopeInfo.timeOfBirth.mins = req.body.mins || profile.religionInfo.horoscopeInfo.timeOfBirth.mins
      profile.religionInfo.horoscopeInfo.timeOfBirth.period = req.body.period || profile.religionInfo.horoscopeInfo.timeOfBirth.period
      profile.religionInfo.horoscopeInfo.placeOfBirth.bcountry = req.body.country || profile.religionInfo.horoscopeInfo.placeOfBirth.bcountry
      profile.religionInfo.horoscopeInfo.placeOfBirth.bstate = req.body.state || profile.religionInfo.horoscopeInfo.placeOfBirth.bstate 
      profile.religionInfo.horoscopeInfo.placeOfBirth.bcity = req.body.city || profile.religionInfo.horoscopeInfo.placeOfBirth.bcity
      profile.familyInfo.fatherStatus = req.body.fatherstatus || profile.familyInfo.fatherStatus
      profile.familyInfo.motherStatus =req.body.motherstatus || profile.familyInfo.motherStatus
      profile.familyInfo.brothers.noOfBrothers = req.body.noOfBrothers || profile.familyInfo.brothers.noOfBrothers
      profile.familyInfo.brothers.brotherStatus =req.body.brothersstatus || profile.familyInfo.brothers.brotherStatus
      profile.familyInfo.sisters.noOfSisters = req.body.noOfSisiters || profile.familyInfo.sisters.noOfSisters
      profile.familyInfo.sisters.sistersStatus =req.body.sistersstatus || profile.familyInfo.sisters.sistersStatus
      profile.familyInfo.familyLocation.isMyLocation = req.body.isMyLocation || profile.familyInfo.familyLocation.isMyLocation
      profile.familyInfo.familyLocation.isDifferentLocation = req.body.isdifferent || profile.familyInfo.familyLocation.isDifferentLocation
      profile.familyInfo.familyLocation.place.country = req.body.pcountry || profile.familyInfo.familyLocation.place.country
      profile.familyInfo.familyLocation.place.state = req.body.pstate || profile.familyInfo.familyLocation.place.state
      profile.familyInfo.familyLocation.place.city = req.body.pcity || profile.familyInfo.familyLocation.place.city
      profile.familyInfo.parentsContactNo.country_code = req.body.pcountrycode || profile.familyInfo.parentsContactNo.country_code
      profile.familyInfo.parentsContactNo.number = req.body.pmobile || profile.familyInfo.parentsContactNo.number
      profile.ancestralOrigin = req.body.Ancestral || profile.ancestralOrigin
      // page.title = req.body.title,
      // page.content = req.body.content,
      // page.is_active = req.body.is_active;
      const updatedProfile = await profile.save();
      console.log(updatedProfile)
      if (updatedProfile) {
        return res
          .status(200)
          .send({ message: 'Page Updated', data: updatedProfile });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Page.' });
  });
export default router;