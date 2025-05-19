const mongoose = require('mongoose');
require('dotenv').config();


// const mongoUrl = 'mongodb://localhost:27017/hotels';  //local url
 const mongoUrl = 'mongodb+srv://Intekhab:exGamer@cluster0.hwspfsy.mongodb.net/';   // global url
                                                              

mongoose.connect(mongoUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('connected', () =>
{
    console.log("Connected to mongo db server");
})

db.on('error', (error) =>
{
    console.error('Mongo db error', error);
})

db.on('disconnected', () =>
{
    console.log("mongo db server disconnected");
})

module.exports = db;