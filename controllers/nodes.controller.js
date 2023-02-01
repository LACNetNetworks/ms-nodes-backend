const Nodes = require('../models/Nodes')

exports.create=(req,res) =>{
    const node = req.body
    Nodes.create(node, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
}
exports.findAll=(req,res)=>{
    Nodes.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    }).sort({entity: 'asc'})
}
exports.findAllPortal=(req,res)=>{
    Nodes.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    }).sort({entity: 'asc'})
    .select({"_id": 0, "entity": 1, "networkId": 1, "networkName": 1,  "type": 1,  "nameTechnicalContact": 1, "nameBussinesContact": 1, "enode": 1 })
}
exports.findAllSort=(req,res)=>{
    Nodes.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}

exports.find=(req,res)=>{
    const nodeId = req.params.nodeId

    Nodes.findById(nodeId,(err,data)=>{
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

    Nodes.findByIdAndUpdate(nodeId, node,{new:true},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}

exports.delete=(req,res)=>{
    const nodeId = req.params.nodeId
  

    Nodes.findByIdAndDelete(nodeId,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send({message:`succesfully delete node ${nodeId}`})
        }
    })
}
