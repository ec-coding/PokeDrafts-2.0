const mongoose = require('mongoose')
const user = require('./user')

const DeckSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cards: [
    ]
})

module.exports = mongoose.model('Deck', DeckSchema)