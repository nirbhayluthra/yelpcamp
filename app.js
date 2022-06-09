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
app.get('/campgrounds',async(req,res)=>{
    const campgrounds = await campground.find({});
    res.render('campgrounds/index',{campgrounds})
})


app.listen(3000,()=>{
    console.log("port 3000");
})