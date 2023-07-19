const mongoose = require('mongoose')
const user = require('./user')

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        // trim: true
    },
    value: {
        type: String,
        required: true
    },
    // How are these defined?
    // cardCount: {
    //     type: Number,
    //     default:0,
    //     required: false,
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// module.exports = mongoose.model('Card', CardSchema)
module.exports = CardSchema