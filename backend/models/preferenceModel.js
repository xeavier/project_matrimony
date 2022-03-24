import mongoose from 'mongoose';


const PreferenScechema = new mongoose.Schema({
	name: { type: String },
	basicPreferences: {
		age: {
			limit: {
				from: { type: Number },
				to: { type: Number },
			},
			isStrict: { type: Boolean }
		},
		height: {
			limit: {
				from: { type: Number },
				to: { type: Number },
			},
			isStrict: { type: Boolean }
		},
		martialStatus: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
		motherTongue: {
			language: { type: String },
			isStrict: { type: Boolean }
		},
		physicalStatus: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
		drinkingHabits: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
		smokingHabits: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
	},
	religionPreferences: {
		religion: { type: String },
		caste: { type: String },
		star: { type: String },
	},
	professionalPreferences: {
		education: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
		employedIn: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
		occupation: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
		annualIncome: {
			status: { type: String },
			isStrict: { type: Boolean }
		},
	},
	locationPreferences: {
			location: { type: String },
			isStrict: { type: Boolean }
	},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	about: { type: String },
	created: { type: Date, default: Date.now },
});


const PreferenModel = mongoose.model('Preference', PreferenScechema);

export default PreferenModel;
