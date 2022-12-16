const mongoose = require('mongoose')
const UserRequestSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: false
    },lastName:{
        type: String,
        required: true
    },email:{
        type: String,
        required: true
    },password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model(`User`,UserRequestSchema)