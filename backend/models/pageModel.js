import mongoose from 'mongoose';

const metachema = new mongoose.Schema(
  {
    key: { type: String, required: true },
    valye: { type: Number, default: 0 },
    created_on: { type: Date, default: Date.now },
    update_on: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const pageSchema = new mongoose.Schema({
  title: { type: String, },
  description: { type: String, },
  content: { type: String, },
  editor: { type: String, },
  type: { type: String, },
  linksheet: { type: String, },
  is_shareable: { type: String, },
  is_termsandconditions: { type: String, },
  support_email: { type: String },
  support_phone: { type: String },
  terms_and_condtions: { type: String },
  total_revenue: { type: String },
  total_payment: { type: String },
  status: { type: String, default: 'Created' },
  amount: { type: Number },
  currency: { type: String, default: 'usd' },
  meta: [metachema],
  created_by: { type: String, },
  exprires_on: { type: Date },
  created_on: { type: Date, default: Date.now },
  is_active: { type: Boolean, },
  page_id: { type: String, },
  page_url: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const pageModel = mongoose.model('Page', pageSchema);

export default pageModel;