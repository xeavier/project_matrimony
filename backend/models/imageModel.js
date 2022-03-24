import mongoose from 'mongoose';


const imageSchema = new mongoose.Schema({
	unique_id:{ type: Number},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	image1:{ type: String},
	image2:{ type: String},
	image3:{ type: String},
	createdAt: { type: Date, default: Date.now },
}),
const Image = mongoose.model('Image', imageSchema);

export default Image;