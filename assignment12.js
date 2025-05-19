const express = require('express');
const app = express();

app.get('/assignment', (req, res) =>{
    res.send('I have successfully completed this assignment');
})

app.listen(2000, () =>{console.log('server listening on port 2000')});