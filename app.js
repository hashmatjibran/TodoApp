const express = require('express');

const app = express();

const port = 8000;

// using configuration settings 
const config =require('./Config/config');

// using the body parser
app.use(express.urlencoded());

// use view engine and views
app.set('view engine','ejs');
app.set('views','./Views');

app.use('/',require('./Routes/web'));

app.use(express.static('./Assets'));

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running Successfully on port : ${port}`);
});

