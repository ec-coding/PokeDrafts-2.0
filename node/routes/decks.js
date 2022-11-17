const { request } = require('express')
const express = require('express')
const router = express.Router()
const decksController = require('../controllers/decks')
const passport = require('passport')

// // @desc    Get collection of cards and render it on your index.ejs
// // @route   GET /
// This creates a "logged-in users only" section of the website
router.get('/profile', passport.authenticate('jwt', { session: false }), decksController.getProfile)

// // @desc    Get name of card that was clicked and render it on your index.ejs
// // @route   PUT /
router.get('/putCardName', passport.authenticate('jwt', { session: false }), decksController.putCardName)

// Pass in API URL and use back-end to call data and render it on ejs

// @desc    Clones the card you clicked from search results and places it in the deck
// @route   POST /createDeckCard
router.post('/createDeckCard', passport.authenticate('jwt', { session: false }), decksController.createDeckCard)

// @desc    Counts how many cards a user has in their deck
// @route   GET /countDeckCard
router.get('/countDeckCard', passport.authenticate('jwt', { session: false }), decksController.countDeckCard)

// @desc    Deletes a single card upon clicking it
// @route   DELETE /deleteCard
router.delete('/deleteCard/', passport.authenticate('jwt', { session: false }), decksController.deleteCard)

// @desc    Deletes all cards upon clicking the "Delete Deck" button
// @route   DELETE /deleteDeck
router.delete('/deleteDeck', passport.authenticate('jwt', { session: false }), decksController.deleteDeck)

module.exports = router


