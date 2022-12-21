const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const listingsCtrl = require('../../controllers/api/listings');

// GET /api/listings
router.get('/', listingsCtrl.index);
// GET /api/listings/:id
router.get('/:id', listingsCtrl.show);
// POST /api/listings
router.post('/', ensureLoggedIn, listingsCtrl.create);
// DELETE /api/listing/:id
router.delete('/:id', ensureLoggedIn, listingsCtrl.delete);
// UPDATE /api/listing/:id
router.put('/:id', ensureLoggedIn, listingsCtrl.updateListing);

module.exports = router;



