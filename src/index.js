const express = require("express");
const mong = require("mongoose");
const { router } = require("./routes");


const app = express();

app.use(express.json());

try {
    
mong.connect("mongodb+srv://Jenn:Janki6121@cluster0.vqk5j27.mongodb.net/").then(()=>
 app.listen('0.0.0.0', ()=>{
    console.log("Server started");
 })
 

);

    
} catch (error) {
  console.log(error);  
}

app.route("/", router);



