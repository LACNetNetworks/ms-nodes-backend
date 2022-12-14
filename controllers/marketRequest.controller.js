const MarketRequest = require('../models/MarketRequest')

exports.create=(req,res) =>{
    const node = req.body
    MarketRequest.create(node, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
}
exports.findAll=(req,res)=>{
    MarketRequest.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    }).sort({entity: 'asc'})
}
exports.findAllSort=(req,res)=>{
    MarketRequest.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}

exports.find=(req,res)=>{
    const nodeId = req.params.nodeId

    MarketRequest.findById(nodeId,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}

exports.update=(req,res)=>{
    const nodeId = req.params.nodeId
    const node   = req.body

    MarketRequest.findByIdAndUpdate(nodeId, node,{new:true},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}

exports.delete=(req,res)=>{
    const nodeId = req.params.nodeId
  

    MarketRequest.findByIdAndDelete(nodeId,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send({message:`succesfully delete market request ${nodeId}`})
        }
    })
}
