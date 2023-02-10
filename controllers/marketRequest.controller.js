const MarketRequest = require('../models/MarketRequest')
var nodemailer = require('nodemailer');

exports.create=(req,res) =>{
    const node = req.body
    console.log(" create node market")
    var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: process.env.MAIL_USER ,
            pass: process.env.MAIL_PASSWORD
        }
    })

   var  message = {
        from: "testmarket@lac-net.net",
        to: "tech.support@lac-net.net",
        subject: "TEST - Add node on MarketPlace  " + node.market ,
        text: "TEST - Add Node with enode: " + node.enode + " and Address:" + node.address
         + " on market "+  node.market + ". \n \n Tech Support - LacNet " 
    }
    MarketRequest.create(node, (err, data)=>{
        console.log(" create node market db")

        if(err){ 
            res.status(500).send(err)
        }else{
            transporter.sendMail(message, function(err, info) {
                if (err) {
                  console.log(err)
                } else {
                  console.log(info);
                }
            }
            )

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
