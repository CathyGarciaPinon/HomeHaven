const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  photo: { type: String, required: true },
  Location: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model("Listing", listingSchema); 