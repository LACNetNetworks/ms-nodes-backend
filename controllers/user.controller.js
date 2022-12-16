const User = require('../models/User')
const bcrypt = require("bcryptjs");

exports.create= async (req,res) =>{
    const user = req.body
    const { firstName, lastName, email, password } = user;
    try{
        // Validate user input
        if (!(email && password && firstName && lastName)) {
            res.status(400).send("All input is required");
        }
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });
        
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        const userDB = await User.create({
            firstName,
            lastName,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        })
        // return new user
        res.status(201).json({ firstName,lastName,email });
    } catch (err) {
        res.status(500).send(err)
    console.log(err);
  }
}
exports.findAll=(req,res)=>{
    User.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    }).sort({entity: 'asc'})
}
exports.findAllSort=(req,res)=>{
    User.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}

exports.find=(req,res)=>{
    const nodeId = req.params.nodeId

    User.findById(nodeId,(err,data)=>{
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

    User.findByIdAndUpdate(nodeId, node,{new:true},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
}


