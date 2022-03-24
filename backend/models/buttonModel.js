import mongoose from 'mongoose';

const buttonSchema = new mongoose.Schema({
  title: { type: String, },
  button_type: { type: String, },
  button_status: { type: Boolean, default: true },
  amount: { type: Number },
  status: { type: String, default: 'Created' },
  currency: { type: String, default: 'usd' },
  total_amounts: { type: Number },
  total_payments: { type: Number },
  button_label: { type: String },
  button_theme: { type: String },
  is_active: { type: Boolean, },
  is_expiry: { type: Boolean, },
  button_id: { type: String, },
  created_by: { type: String, },
  code: { type: String, },
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

const buttonModel = mongoose.model('Button', buttonSchema);

export default buttonModel;