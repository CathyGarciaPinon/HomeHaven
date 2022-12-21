const { getNextKeyDef } = require('@testing-library/user-event/dist/keyboard/getNextKeyDef');
const Listing = require('../../models/listing');

module.exports = {
  index,
  show,
  create,
  delete: deleteListing,
  updateListing,
};

async function index(req, res) {
  const listings = await Listing.find({});
  res.json(listings);
}

async function show(req, res) {
  const listing = await Listing.findById(req.params.id);
  res.json(listing);
}

async function create(req, res) {
  req.body.user = req.user._id;
  console.log(req.body)
  const listing = await Listing.create(req.body);
  res.json(listing);
}

async function deleteListing(req, res) {
  const listing = await Listing.findByIdAndDelete(req.params.id);
  res.json(listing);
}

async function updateListing(req, res) {
  // try {
    console.log(req.body)
    const listing = await Listing.findByIdAndUpdate(
      {_id: req.params.id}, req.body, {new: true});
    console.log(listing)
    res.json(listing);
  // } catch (err) {
    // return get(err);
  }
// }

