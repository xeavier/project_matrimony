import mongoose from 'mongoose';

const payemtSchema = new mongoose.Schema({
	payment_id: { type: String },
	amount: { type: Number },
	currency: { type: String, default: 'usd' },
	customer: {
		name: { type: String, },
		email: { type: String, },
	},
	status: { type: String, },
	created_at: { type: Date, default: Date.now },
});

const paymentModel = mongoose.model('Payment', payemtSchema);

export default paymentModel;