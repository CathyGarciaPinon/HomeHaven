const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const listingsCtrl = require('../../controllers/api/listings');

// GET /api/notes
router.get('/', listingsCtrl.index);
// GET /api/notes/:id
router.get('/:id', listingsCtrl.show);
// POST /api/notes
router.post('/', ensureLoggedIn, listingsCtrl.create);
// DELETE /api/notes/:id
// router.delete('/:id', ensureLoggedIn, listingsCtrl.delete);

module.exports = router;