// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('./controller/todoController');

// Route for getting all todos
router.get('/todos', todoController.viewAllTodoController);

// Route for adding a new todo
router.post('/todos', todoController.createTodoController);

// Route for updating a todo by ID
router.put('/todos/:id',todoController.updateTodoController);

// Route for deleting a todo by ID
router.delete('/todos/:id', todoController.deleteTodoController);

module.exports = router;
