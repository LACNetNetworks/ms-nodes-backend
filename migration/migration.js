
const mongoose = require('mongoose')
const Nodes = require('../models/Nodes')
const fs = require("fs");
const { parse } = require("csv-parse");
require("dotenv").config();

const MONGODB_URI=process.env.MONGODB_URI 


console.log(`MONGODB_URI ${MONGODB_URI}`)
//DB connection
mongoose.connect(MONGODB_URI,{
   // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

fs.createReadStream("../resources/lacchain-nodes.csv")
  //.pipe(parse({ delimiter: ",", from_line: 2, to_line:20 }))
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    
    //let data = "|  "+count + "  | "+ row[1]+ "|"+row[2] + " | "+row[3]+ "|"+row[4]+" | "+row[5]+" | "+row[6]+" | "+row[0] +"\n"
   

    let node = {
      entity: row[1],
    networkId: row[2],
    networkName: row[3],
    type: row[4],
    technicalContact: row[5],
    BussinesContact: row[6],
    enode: row[0]
    }
    //console.log(node);
    Nodes.create(node, (err, data)=>{
      if(err){
          console.log(err)
      }
    })
    
   
  })
  .on("end", function () {
    
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
});