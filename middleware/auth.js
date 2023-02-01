const jwt = require("jsonwebtoken");
const fs = require('fs');
var  cert = fs.readFileSync('/security/rsa-public.pem');  // get public key
//var  cert = fs.readFileSync('/Users/edumar111/lacchain/workspace/ms-nodes-backend/security/rsa-public.pem');  // get public key

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, cert, { algorithms: ['RS256'] });

    req.user = decoded;
  } catch (err) {

    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;


 
 