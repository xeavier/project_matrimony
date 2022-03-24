import mongoose from 'mongoose';

const metachema = new mongoose.Schema(
  {
    key: { type: String,},
    value: { type: String, },
  },
  {
    timestamps: true,
  }
);

const linkSchema = new mongoose.Schema({
  title: { type: String, },
  description: { type: String, },
  content: { type: String, },
  link_type: { type: String, },
  payment_for: { type: String, },
  link_status: { type: Boolean, default: true },
  amount: { type: Number },
  currency: { type: String, default: 'usd' },
  total_amounts: { type: Number },
  total_payments: { type: Number },
  is_email_notify: { type: Boolean, default: false},
  email_to: { type: String, },
  phone_to: { type: Number, },
  is_sms_notify: { type: Boolean, default: false},
  is_active: { type: Boolean, },
  is_expiry: { type: Boolean, },
  link_id: { type: String, },
  link_url: { type: String },
  remainders: { type: String, },
  refernce_id: { type: String },
  meta: [metachema],
  status: { type: String, default: 'Created' },
  created_by: { type: String, },
  exprires_on: { type: Date },
  created_on: { type: Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

//   is_shareable: { type: String, },
//   is_termsandconditions: { type: String, },
//   support_email: { type: String },
//   support_phone: { type: String },
//   terms_and_condtions: { type: String },
//   total_revenue: { type: String },
//   total_payment: { type: String },
});

const linkModel = mongoose.model('Link', linkSchema);

export default linkModel;