const mongoose = require('mongoose');

// create a schema which means a structure of your data which will be stored in the db
const todoSchema = mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String
    },
    
    dueDate:{
        type:Date
    }
});

// now modle out the schema

const todoList=mongoose.model('todoList',todoSchema);


// export the modeled schema out
module.exports = todoList;