const express = require('express')
const mongoose = require('mongoose')
const nodesRouter = require('./routes/nodes.routes')
// config server express
const app = express()
const PORT = process.env.SEVER_PORT || 5002
const MONGODB_URI=process.env.MONGODB_URI || "mongodb://admin:password@localhost:27017/lacnetdb?authSource=admin"
//Middleware json
app.use(express.json())

console.log(`URI_MONGO ${MONGODB_URI}`)
//DB connection
mongoose.connect(MONGODB_URI,{
   // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// Routes
app.get("/healt",(req,res)=>{
    res.send("up")
})

app.use('/nodes', nodesRouter)
//Start Server
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))

