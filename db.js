const mongoose = require('mongoose');;

const mongoUrl = 'mongodb://localhost:27017/hotels';

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