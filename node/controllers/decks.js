const Deck = require('../models/deck')
const Card = require('../models/card')
const { MongoClient, ObjectID } = require('mongodb')

module.exports = {
    getProfile: async (req, res) => {
        try {
            // req.body.user = req.user.id
            // const cards = await Cards.find({ user:req.user.id }).lean()
            let deck = await Deck.findOne({ 
                user:req.user._id
            })
            if (deck === null) {
                deck = new Deck ()
            }
            const cards = deck.cards
            const cardCount = cards.length
            const cardName = req.body.name
            res.json(cards)
            // res.render('index.html', {
            //     name: req.user.firstName,
            //     quantity: cardCount,
            //     cards,
            //     cardName
            //     // ofEachCard: specificCardCount
            // })
        } catch (err) {
            console.error(err)
            res.render('error/500')
        }
    },
    getCards: async (req, res) => {
        try {
            res.render('decks.ejs', { 
                cards: results 
            })
        } catch (err) {
            console.error(err)
            res.render('error/500')
        }
    },

    //This function is obsolete, delete this + its route later
    putCardName: async (req, res) => {
        try {
            const cardName = await Card.findById(req.params.id);
            res.render('decks.ejs', { 
                cardName
            })
        } catch (err) {
            console.error(err)
            res.render('error/500')
        }
    },

    createDeckCard: async (req, res) => {
        try {
            let deck = await Deck.findOne({
                user:req.user._id
            })
            if (deck === null) {
                deck = new Deck ({ 
                    user: req.user._id
                })
            }
			deck.cards.push({ 
                _id: new ObjectID(), 
                ...req.body
            })
            deck.save()
            let card = deck.cards.at(-1)
            res.json(card)
        } catch (err) {
            console.error(err)
            res.json(err)
        }
    },
    // countCardQuantity: async (req, res) => {
    //     try {

    //         console.log(cardCount)
    //         res.render('decks.ejs', {
    //             quantity: cardCount,
    //         })
    //         res.json('')
    //     } catch (err) {
    //         return res.render('error/500')
    //     }
    // },

    //This is for counting how many of each card are in a deck
    countDeckCard: async (req, res) => {
        try {

            res.render('decks.ejs', {
                quantity: cardCount,
            })
            res.json('')
        } catch (err) {
            return res.render('error/500')
        }
    },
    deleteCard: async (req, res) => {
        try {
            const userID = req.user.id
            const deck = await Deck.findOne({ user: userID })
            if (!deck) {
                return res.status(404).json
            }
            console.log(deck.cards)
            deck.cards = deck.cards.filter(card => card._id != req.body._id)
            console.log(req.body._id)
            deck.update()
            res.json('')
        } catch (err) {
            return res.render('error/500')
        }
    },
    deleteDeck: async (req, res) => {
        try {
            const userID = req.user.id
            await Deck.deleteOne({ 
                user: userID
             })
            res.json('')
            console.log(`Deleted deck`)
        } catch (err) {
            return res.render('error/500')
        }
    }
}