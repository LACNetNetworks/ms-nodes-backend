
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
      enode: row[0],
      ipAddress: row[1],
      coinbase: row[2],
      portp2p: row[3],
      status: row[4],
      nodeName: row[5],
      entity: row[6],
      networkId: row[7],
      networkName: row[8],
      type: row[9],
      nameTechnicalContact: row[10],
      emailTechnicalContact: row[11],
      phoneTechnicalContact: row[12],
      nameBussinesContact: row[13],
      emailBussinesContact: row[14],
      phoneBussinesContact: row[15]
    }
    console.log(node);
    Nodes.create(node, (err, data)=>{
      if(err){
        console.log(node)
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