const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose')

app.use(express.urlencoded()) 
app.use('/',require('./routes'))
app.use(express.static('./assets')) // for getting static

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err) {
        console.log(`Error in starting the server`);
    }
    else {
        console.log(`server is running on port number:${port}`);
    }
})