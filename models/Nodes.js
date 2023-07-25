const mongoose = require('mongoose')

const nodesSchema = mongoose.Schema({
    enode:{
        type: String,
        required: true
    },
    ipAddress:{
        type: String,
        required: true
    },
    coinbase:{
        type: String,
        required: true
    },
    portp2p:{
        type: String,
        required: true
    },status:{
        type: String,
        required: true
    },nodeName:{
        type: String,
        required: false
    },
    entity: {
        type: String,
        required: false
    },
    networkId:{
        type: String,
        required: false
    },networkName:{
        type: String,
        required: false
    },type:{
        type: String,
        required: false
    },nameTechnicalContact:{
        type: String,
        required: false
    },emailTechnicalContact:{
        type: String,
        required: false
    },phoneTechnicalContact:{
        type: String,
        required: false
    },nameBussinesContact:{
        type: String,
        required: false
    },emailBussinesContact:{
        type: String,
        required: false
    },phoneBussinesContact:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model(`Nodes`,nodesSchema)