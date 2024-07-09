// TodoList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './TODO';


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        // Fetch todos from the API when the component mounts
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/todos');
            setTodos(response.data.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async () => {
        if (!newTodo) return;

        try {
            // Send a POST request to add a new todo
            await axios.post('http://localhost:3001/api/todos', { name: newTodo });
            // Fetch todos again to update the list
            fetchTodos();
            // Clear the input field
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            // Send a DELETE request to remove a todo
            await axios.delete(`http//:localhsot:3001/api/todos/${id}`);
            
            console.log(eledet)
            // Fetch todos again to update the list
           
            fetchTodos();
        } catch (error) {
            console.log(error)
            console.error('Error deleting todo:', error);
        }
    };


    const updateTodo = async (id, name) => {
        try {
            // Send a PUT request to update a todo
            const edelete = await axios.put(`http://localhost:3001/api/todos/${id}`, { name });
            // Fetch todos again to update the list
            console.log(edelete)
            fetchTodos();
            // Clear the editing state
            setEditingTodo(null);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <Todo HndelUpdate={updateTodo} HandelDelete={deleteTodo} todo={ todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;