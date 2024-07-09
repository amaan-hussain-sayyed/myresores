import './App.css'
import React, { useState, useEffect } from 'react';
import { fetchTodos, updateTodo, addTodo, deleteTodo } from '../src/services/api'; // Import your updateTodo function

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Medium');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todosData = await fetchTodos();
        if (todosData.error || todosData.data.length < 1) {
          setError("Data Not found");
          return;
        }
        setTodos(todosData.data);
      } catch (error) {

      }
    };

    fetchData();
  }, []);


  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setName(todo.task);
    setDescription(todo.description);
    setStatus(todo.status)
    setPriority(todo.priority)
  };

  const handleUpdateTodo = async () => {
    try {
      await updateTodo(editingTodo.id, { name, description, status, priority });
      // Fetch updated todos
      const updatedTodosData = await fetchTodos();
      setTodos(updatedTodosData.data);
      setEditingTodo(null);
      setDescription('')
      setName('')
      setStatus('')
      priority('')
    } catch (error) {
      return;
    }
  };

  const handleAddTodo = async () => {
    try {
      await addTodo({
        name,
        description,
        status,
        priority
      });
      // Fetch updated todos
      const updatedTodosData = await fetchTodos();
      setTodos(updatedTodosData.data);

      // Clear the input fields after adding a new todo
      setName('');
      setDescription('');
      setStatus('');
      setPriority('');
    } catch (error) {

      return
    }
  };
  const handleDeleteTodo = async (todoId) => {
    try {
      await deleteTodo(todoId);
      // Fetch updated todos after deletion
      const updatedTodosData = await fetchTodos();
      setTodos(updatedTodosData.data);
    } catch (error) {

    }
  };

  return (

    <div>
      <h2>Add Todo</h2>
      <form>
        <label>
          Task:
          <input
            type="text"
            placeholder='enter tast name'
            onChange={(e) => {
              setName(e.target.value)
              console.log(name)
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)

            }
          />
        </label>
        <label>
          Status:
          <select
            value="Pending"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Priority:
          <select
            value="Medium"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Medium">Medium</option>
            <option value="Low"> Low</option>
            <option value="High">High</option>
          </select>
        </label>
        <button type="button" onClick={handleAddTodo}>Add Todo</button>
      </form>
      <h2>Todo List</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
            <th>status</th>
            <th>priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                {editingTodo && editingTodo.id === todo.id ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  todo.task
                )}
              </td>
              <td>
                {editingTodo && editingTodo.id === todo.id ? (
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                ) : (
                  todo.description
                )}
              </td>
              <td>
                {editingTodo && editingTodo.id === todo.id ? (
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                ) : (
                  todo.status
                )}
              </td>
              <td> {editingTodo && editingTodo.id === todo.id ? (
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              ) : (
                todo.priority
              )}</td>
              <td>
                {editingTodo && editingTodo.id === todo.id ? (
                  <button onClick={handleUpdateTodo}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(todo)}>Edit</button>
                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                  </>
                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default App
