const express = require('express');
const app=express();
const path=require('path');
const campground = require('./models/campground')
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
app.get('/makecampground',async(req,res)=>{
    const camp=new campground({title:'my backyard',price:'20'})
    await camp.save();
    res.send(camp)
})

app.listen(3000,()=>{
    console.log("port 3000");
})