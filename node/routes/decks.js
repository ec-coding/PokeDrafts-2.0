const { request } = require('express')
const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
// const cardsController = require('../controllers/cards')
const decksController = require('../controllers/decks')

// // @desc    Get collection of cards and render it on your index.ejs
// // @route   GET /
// This creates a "logged-in users only" section of the website
router.get('/profile', ensureAuth, decksController.getProfile)

// // @desc    Get name of card that was clicked and render it on your index.ejs
// // @route   PUT /
router.get('/putCardName', ensureAuth, decksController.putCardName)

// Pass in API URL and use back-end to call data and render it on ejs

// @desc    Clones the card you clicked from search results and places it in the deck
// @route   POST /createDeckCard
router.post('/createDeckCard', ensureAuth, decksController.createDeckCard)

// @desc    Counts how many cards a user has in their deck
// @route   GET /countDeckCard
router.get('/countDeckCard', ensureAuth, decksController.countDeckCard)

// @desc    Deletes a single card upon clicking it
// @route   DELETE /deleteCard
router.delete('/deleteCard/', ensureAuth, decksController.deleteCard)

// @desc    Deletes all cards upon clicking the "Delete Deck" button
// @route   DELETE /deleteDeck
router.delete('/deleteDeck', ensureAuth, decksController.deleteDeck)

module.exports = router


