const mongoose = require('mongoose')
const MarketRequestSchema = mongoose.Schema({
    supportEmail:{
        type: String,
        required: false
    },market:{
        type: String,
        required: true
    },address:{
        type: String,
        required: true
    },enode:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model(`MarketRequest`,MarketRequestSchema)