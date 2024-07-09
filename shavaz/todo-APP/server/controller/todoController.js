const model = require("../model/todoModel");


async function createTodoController(req, res) {
    const _params = req.body;
 
    const result = await model.createTodo(_params);

    console.log(result)
    if (!result || (result && result.error)) {
        return res.status(400).json({ error: result.error });
    }

    return res.json({ message: 'Todo created successfully', data: result.data });
}
async function updateTodoController(req, res) {
    const todoId = req.params.id;
    const _params = req.body;

    const result = await model.updateTodo(todoId, _params).catch(err => {
        return {error:err}
    });

    console.log("this is my todo updated",result)
    if (!result || (result && result.error)) {
        return res.json({ error: result.error ,status:500});
    }

    return res.json({ message: 'Todo updated successfully', todo: result.data ,status:200,mykey:"this is todo" });
}

async function viewAllTodoController(req, res) {
    let _params = req.query

    const result = await model.viewAllTodo(_params);

    if (!result || (result && result.error)) {
        let error = (!result || !result.error) ? "internal serve error" : result.error
        return res.status(400).json({ error: error , message: 'all data is retriver' ,data:false,status:500});
    }

    return res.json({ message: 'all data is retriver', data: result.data,status:200, error:false});
}
async function deleteTodoController(req, res) {
    let id = req.params.id

    const result = await model.deleteTodo(id);

    if (    !result || ( result &&result.error)) {
        return res.status(400).json({ error: result.error });
    }

    return res.json({ message: 'data is deleted', todo: result.data });
}

module.exports = {
    createTodoController,
    updateTodoController,
    viewAllTodoController,
    deleteTodoController
    
};