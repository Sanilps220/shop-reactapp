const express = require('express');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
//app.use(require('cors'))


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("connected",()=>{
   console.log("db connceted");
  
})
mongoose.connection.on("err",(err)=>{
   console.log(err);
})

require('./models/product');

app.use(express.json())


app.use(require('./routes/screen'));


app.listen(5000,(error)=>{
    if(error){
        console.log(error)
    }
    console.log("runnnig on port 5000");
})