import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address_street_no: { type: String },
  address_street_alt: { type: String },
  address_city: { type: String, required: true },
  address_state: { type: String, required: true },
  address_postal_code: { type: String, required: true },
  address_country_code: { type: String, required: true },
  bio: { type: String, required: true },
  website: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const storeModel = mongoose.model('Store', storeSchema);

export default storeModel;