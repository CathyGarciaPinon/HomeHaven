const Listing = required('../../models/listing');

module.exports = {
  index,
  show,
  create,
};

async function index(req, res) {
  const listings = await Listing.find({});
  res.json(listings);
}

async function show(req, res) {
  const listing = await Note.findById(req.params.id);
  res.json(listing);
}

async function create(req, res) {
  req.body.user = req.user._id;
  const listing = await Listing.create(req.body);
  res.json(listing);
}