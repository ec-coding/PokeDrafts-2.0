const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
// const cardsController = require('../controllers/cards');
const decksController = require('../controllers/decks');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc    Login/Landing page
// @route   GET / 
router.get('/', ensureGuest, homeController.getIndex);

// @desc    Profile
// @route   GET /profile 
router.get('/profile', ensureAuth, decksController.getProfile)

// module.exports spits out something that we can use somewhere else
module.exports = router