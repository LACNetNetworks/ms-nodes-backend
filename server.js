require("dotenv").config();
const express = require('express')
const https = require('https');
const mongoose = require('mongoose')
const nodesRouter = require('./routes/nodes.routes')
const marketRequestRouter = require('./routes/marketrequest.routes')
const userRouter = require('./routes/user.routes')
const loginRouter = require('./routes/login.routes')
const dbConfig = require("./config/db.config.js");
const  path  = require("path");
const fs = require('fs');
const cors = require("cors");


var corsOptions = {
  origin: "*"
};

const options = {
  key: fs.readFileSync(__dirname + '/certs/private.key', 'utf8'),
 cert: fs.readFileSync(__dirname + '/certs/certificate.crt', 'utf8')
};


// config server express
const app = express()
const PORT = process.env.SEVER_PORT 
const MONGODB_URI=dbConfig.MONGODB_URI






//CORS
app.use(cors(corsOptions));
//Middleware json
app.use(express.json())

console.log(`URI_MONGO ${MONGODB_URI}`)
app.use('/static', express.static(path.join(__dirname, 'resources')))
//app.use('/.well-known/pki-validation/', express.static(path.join(__dirname, 'well-known')))

//DB connection
mongoose.connect(MONGODB_URI,{
   // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/list-nodes', function(req, res) {
    res.sendFile(path.join(__dirname, './resources/pages/listnodes.html'));
  });
// Routes
app.get("/health",(req,res)=>{
    res.send("up")
})

app.use('/nodes', nodesRouter)
app.use('/market', marketRequestRouter)
app.use('/user', userRouter)
app.use('/login',loginRouter )
//Start Server
//app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))

https.createServer(options, app).listen(PORT,()=> console.log(`Server is running on port ${PORT}`))