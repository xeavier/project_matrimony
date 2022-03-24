import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  // first_name: { type: String },
  // last_name: { type: String },
  name: { type: String},
  email: { type: String, required: true, unique: true, index: true, dropDups: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  isRegisterCompleted: { type: Boolean, required: true, default: false },
  profileFor: { type: String},
  gender: { type: String},
  mobileNumber:{ type: Number},
  basicInfo: {
    dob: { type: Date },
    religion: { type: String},
    motherTongue: { type: String},
  },
  religionInfo: {
    caste: { type: String },
    isWillingFromMarryOtherCommunities:{ type: Boolean, default: false },
    subCaste: { type: String},
    gothram: { type: String},
    dosham: { type: String},
  },
  personalInfo: {
    martialStatus: { type: String },
    height:{ type: String },
    familyStatus: { type: String},
    familyType: { type: String},
    familyValue: { type: String},
    isDisability: { type: Boolean, default: false },
  },
  professionalInfo: {
    highestEducation: { type: String },
    employedIn:{ type: String },
    occupation: { type: String},
    annualIncome: { 
      currency: { type: String},
      amount: { type: String},
    },
    workLocation: { 
      country: { type: String},
      state: { type: String},
      city: { type: String},
    },
  },
  aboutMe: { type: String},
  profileid: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  preferenceid: { type: mongoose.Schema.Types.ObjectId, ref: 'Preference' },
  // type: { type: String, default: 'individual', enum: ['individual', 'company'] },
   images: { type: mongoose.Schema.Types.ObjectId, ref: 'image' },
   created: { type: Date, default: Date.now },
});


const userModel = mongoose.model('User', userSchema);

export default userModel;
