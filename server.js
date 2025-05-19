
const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
    res.send('Welcome to our hotel. Hope you are enjoying.')
})


    const personRoutes = require('./routes/personRoutes');
    const MenuItemRoutes = require('./routes/menuRoutes')
    app.use('/person', personRoutes)
    app.use('/menu', MenuItemRoutes)

app.listen(3000, function(){console.log("Server is listening on port 3000")})