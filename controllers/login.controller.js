const User = require('../models/User')
const bcrypt = require("bcryptjs");
const fs = require('fs');
const jwt = require('jsonwebtoken');

exports.login= async (req,res) =>{
    const {  email, password } = req.body;

    try{
        // Validate user input
        if (!(email && password )) {
            res.status(400).send("All input is required");
        }
        // check if user already exist
        // Validate if user exist in our database
        const user = await User.findOne({ email });
        
       
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
      
            var privateKey = fs.readFileSync('/security/rsa-private.pem');
            let expire =Math.floor(Date.now()  / 1000) + (24 * 60 * 60);
            
            const token = jwt.sign({ sub: email, aud:'backoffice', iss:"ms-security", exp: expire }, privateKey, { algorithm: 'RS256'});
            // user
            
            res.status(200).json({token});
        }else{
            
            res.status(400).send("Invalid Credentials");
        }
        
       
    } catch (err) {
        res.status(500).send(err)
     console.log(err);
   }
}





