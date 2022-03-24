import express from 'express';
import { isAuth, isAdmin } from '../util';
import Prefernce from '../models/preferenceModel';
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
    const prefernce = await Prefernce.findOne({_id: req.params.id});
    console.log(prefernce)
    if (prefernce) {
      res.send(prefernce);
    } else {
      res.status(404).send({ message: 'Prefernce Not Found.' });
    }
  });

  router.put('/:id', async (req, res) => {
    console.log('profile')
    const prefernceid = req.params.id;
    const prefernce = await Prefernce.findById(prefernceid);
    console.log(req.body )
    if (prefernce) {
      prefernce.basicPreferences.age.limit.from =  req.body.ageFrom || prefernce.basicPreferences.age.limit.from
      prefernce.basicPreferences.age.limit.to = req.body.ageTo || prefernce.basicPreferences.age.limit.to
      prefernce.basicPreferences.height.limit.from =  req.body.heightFrom || prefernce.basicPreferences.height.limit.from 
      prefernce.basicPreferences.height.limit.to =  req.body.heightTo || prefernce.basicPreferences.height.limit.to
      prefernce.basicPreferences.martialStatus.status =  req.body.martial_status || prefernce.basicPreferences.martialStatus.status
      prefernce.basicPreferences.martialStatus.isStrict = req.body.drinking_habits || prefernce.basicPreferences.martialStatus.isStrict
      prefernce.basicPreferences.motherTongue.status =  req.body.martial_status || prefernce.basicPreferences.motherTongue.status
      prefernce.basicPreferences.motherTongue.isStrict = req.body.drinking_habits || prefernce.basicPreferences.motherTongue.isStrict
      prefernce.basicPreferences.physicalStatus.status =  req.body.physucal_status || prefernce.basicPreferences.physicalStatus.status
      prefernce.basicPreferences.physicalStatus.isStrict = req.body.drinking_habits || prefernce.basicPreferences.physicalStatus.isStrict
      prefernce.basicPreferences.drinkingHabits.status =  req.body.drinking_habits || prefernce.basicPreferences.drinkingHabits.status
      prefernce.basicPreferences.drinkingHabits.isStrict = req.body.drinking_habits || prefernce.basicPreferences.drinkingHabits.isStrict
      prefernce.basicPreferences.smokingHabits.status =  req.body.Smoking_habits || prefernce.basicPreferences.smokingHabits.status
      prefernce.basicPreferences.smokingHabits.isStrict = req.body.drinking_habits || prefernce.basicPreferences.smokingHabits.isStrict
      prefernce.professionalPreferences.education.status =  req.body.Education || prefernce.professionalPreferences.education.status
      prefernce.professionalPreferences.education.isStrict = req.body.drinking_habits || prefernce.professionalPreferences.education.isStrict
      prefernce.professionalPreferences.employedIn.status =  req.body.Employedin || prefernce.professionalPreferences.employedIn.status
      prefernce.professionalPreferences.employedIn.isStrict = req.body.drinking_habits || prefernce.professionalPreferences.employedIn.isStrict
      prefernce.professionalPreferences.occupation.status =  req.body.Occupation || prefernce.professionalPreferences.occupation.status
      prefernce.professionalPreferences.occupation.isStrict = req.body.drinking_habits || prefernce.professionalPreferences.occupation.isStrict
      prefernce.professionalPreferences.annualIncome.status =  req.body.annualIncome || prefernce.professionalPreferences.annualIncome.status
      prefernce.professionalPreferences.annualIncome.isStrict = req.body.drinking_habits || prefernce.professionalPreferences.annualIncome.isStrict
      prefernce.locationPreferences.location = req.body.isdifferent || prefernce.locationPreferences.location
      prefernce.locationPreferences.isStrict = req.body.pcountry || prefernce.locationPreferences.isStrict
      prefernce.about = req.body.about || prefernce.about
      // page.title = req.body.title,
      // page.content = req.body.content,
      // page.is_active = req.body.is_active;
      const updatedPrefernce = await prefernce.save();
      console.log(updatedPrefernce)
      if (updatedPrefernce) {
        return res
          .status(200)
          .send({ message: 'Page Updated', data: updatedPrefernce });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Page.' });
  });
export default router;