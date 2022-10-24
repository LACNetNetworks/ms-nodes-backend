const mongoose = require('mongoose')

const nodesSchema = mongoose.Schema({
    entity: {
        type: String,
        required: true
    },
    networkId:{
        type: String,
        required: true
    },networkName:{
        type: String,
        required: true
    },type:{
        type: String,
        required: true
    },technicalContact:{
        type: String,
        required: true
    },BussinesContact:{
        type: String,
        required: false
    },enode:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model(`Nodes`,nodesSchema)