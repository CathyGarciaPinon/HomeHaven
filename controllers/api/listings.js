const Listing = require('../../models/listing');

module.exports = {
  index,
  show,
  create,
  delete: deleteListing,
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