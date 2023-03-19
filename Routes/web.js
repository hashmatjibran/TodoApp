const express = require('express');

const router = express.Router();

// use controller 
const controller = require('../Controller/BasicController');

router.get('/',controller.basic);




router.post('/add',controller.createTodo);


router.post('/deleteTodos',controller.deleteTodos);


module.exports = router;