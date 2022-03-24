import mongoose from 'mongoose';


const ProfileSchema = new mongoose.Schema({
  name: { type: String },
  basicInformation: {
    bodyType: { type: String },
    weight:{ type: String},
    collegeOrInstitution: { type: String},
    organization: { type: String},
  },
  lifestyleInfo: {
    eatingHabit: { type: String },
    drinkingHabit:{ type: String },
    smokingHabit: { type: String},
  },
  religionInfo: {
    star: { type: String },
    raasi:{ type: String },
	horoscopeInfo: {
		timeOfBirth: { 
			hrs: { type: String },
			mins: { type: String },
			period: { type: String },
		 },
		placeOfBirth:{ 
			bcountry: { type: String},
			bstate: { type: String},
			bcity: { type: String},
		 },
	  }
  },
  familyInfo: {
    fatherStatus: { type: String },
    motherStatus:{ type: String },
    brothers: { 
      noOfBrothers: { type: String },
      brotherStatus:{ type: String },
    },
    sisters:{ 
      noOfSisters: { type: String },
      sistersStatus:{ type: String },
     },
    familyLocation: {
      isMyLocation: { type: Boolean },
      isDifferentLocation: { type: Boolean },
      place:{ 
        country: { type: String},
        state: { type: String},
        city: { type: String},
       },
    },
    parentsContactNo: {
      country_code: { type: String},
      number: { type: String },
    },
    ancestralOrigin: { type: String},
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   created: { type: Date, default: Date.now },
});


const ProfileModel = mongoose.model('Profile', ProfileSchema);

export default ProfileModel;
