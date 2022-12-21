const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const listingSchema = new Schema({
  photo: { type: String },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: {type: String, required: true},
  seller: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Listing", listingSchema); 