const express = require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db=mongoose.connection;
db.on("error",console.error.bind(console,"conn error:"));
db.once("open",()=>{
    console.log("Database connected")
});


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(3000,()=>{
    console.log("port 3000");
})