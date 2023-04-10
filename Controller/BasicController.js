const todoList = require('../Models/todoStructure');


module.exports.basic = function (request , response) {  
    displayTodos(request , response);
}


const createTodo = function (request , response)
{
    todoList.create({
        description : request.body.description,
        category : request.body.category,
        dueDate : request.body.date
    });

    return response.redirect('/');
}

const displayTodos = function (request , response) { 

    const query = todoList.find({})
    .then((result) => {
       return response.render('index',{"result":result});
        
    }).catch((err) => {
        console.log("error in display function")
    });
    

 }

 const deleteTodos = function(request , response)
 {

    for (const id of request.body.deleteTodoArray) {
        console.log(id);
        const query= todoList.findByIdAndDelete(id)
        .then((result) => {
        }).catch((err) => {
        });
    }
    return response.end(request.headers.referer);
   
 }

exports.deleteTodos=deleteTodos;
exports.createTodo = createTodo;