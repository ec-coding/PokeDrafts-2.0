const mongoose = require('mongoose')
const user = require('./user')
const Card = require('./card')

const DeckSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cards: [
        Card
    ]
})

module.exports = mongoose.model('Deck', DeckSchema)