// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; // Replace with your backend API URL

export const fetchTodos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/todos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        handleApiError(error);
        return { error: 'Failed to fetch todos' };
    }
};

export const updateTodo = async (todoId, updatedFields) => {
    try {
        const response = await axios.put(`${BASE_URL}/todos/${todoId}`, updatedFields);
        return response.data; // Assuming the API returns data about the updated todo
    } catch (error) {
        console.error('Error updating todo:', error);
        handleApiError(error);
        return { error: 'Failed to update todo' };
    }
};

export const addTodo = async (newTodo) => {
    try {
        const response = await axios.post(`${BASE_URL}/todos`, newTodo);
        return response.data; // Assuming the API returns data about the newly created todo
    } catch (error) {
        console.error('Error adding todo:', error);
        handleApiError(error);
        return { error: 'Failed to add todo' };
    }
};

export const deleteTodo = async (todoId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/todos/${todoId}`);
        return response.data; // Assuming the API returns data about the deleted todo
    } catch (error) {
        console.error('Error deleting todo:', error);
        handleApiError(error);
        return { error: 'Failed to delete todo' };
    }
};

// Helper function to handle common error scenarios
const handleApiError = (error) => {
    if (error.response) {
        console.error('Server responded with error status:', error.response.status);
        console.error('Error response data:', error.response.data);
    } else if (error.request) {
        console.error('No response received from the server');
    } else {
        console.error('Error setting up the request:', error.message);
    }
};
