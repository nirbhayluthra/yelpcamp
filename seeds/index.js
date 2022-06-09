const campground = require('../models/campground')
const cities=require('./cities')
const {places, descriptors}=require('./seedHelpers')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/yelp-camp');
const db=mongoose.connection;
db.on("error",console.error.bind(console,"conn error:"));
db.once("open",()=>{
    console.log("Database connected")
});

const sample=(array)=>{
return array[Math.floor(Math.random()*array.length)];

}
const seedDB=async()=>{
    await campground.deleteMany({});
   for(let i=0;i<50;i++){
       const random1000=Math.floor(Math.random()*1000);
     const camp=  new campground({
           location:`${cities[random1000].city},${cities[random1000].state}`,
           title:`${sample(descriptors)} ${sample(places)}`
       })
       await camp.save();
   }

}
seedDB().then(()=>{
    mongoose.connection.close();
})