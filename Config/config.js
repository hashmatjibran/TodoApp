// require mongoose package/library
const mongoose = require('mongoose');

// use mongoose to connect To DataBase

mongoose.connect('mongodb://localhost:27017/todo');
const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(`error in connecting the db : ${err}`);
});
db.once('open',()=>{
    console.log("connected to db successfully!");
});
