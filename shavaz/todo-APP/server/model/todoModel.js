// controllers/todoController.js
const Todo = require('../schema/todoSchema');
const Joi = require('joi');

// Joi schema for validating the request payload
async function valid(_params) {

    let todoSchema = Joi.object({
        name: Joi.string().required(),
    });

    let valid = await todoSchema.validateAsync(_params).catch((err) => {
        return {error:err}
    })

    if (valid.error) {
        let msg = []
        Object.values(valid.error.details).forEach((detail) => msg.push(detail.message));
        return {error:msg}
    }
    return valid
    
}

async function viewAllTodo(_params) {


    let allTask = await Todo.findAll({ order:[['id','DESC']]}).catch(error => {
        return {error}
    })

    if (!allTask || (allTask && allTask.error)) {
        console.log(allTask)
        return {error:"not found"}
    }

    return {data:allTask}

};

async function createTodo(_params) {
    let data = await valid(_params).catch(err => {
        return { error: err }
    });

    console.log(data)
    if (!data ||(data && data.error)) {

        return { error: data.error};
    }

    let { name} = _params;
  
    let todo = await Todo.create({
        name:name,
     
    }).catch(error => {
        return { error }
    })
    if (!todo || (todo && todo.error)) {
        console.log(todo)
        return  { error: 'cannot create' };
    }
    return {data:todo}
}


async function updateTodo(todoId, _params) {
    data = await valid(_params).catch((err) => {
        return { error: err };
    });

    if (!data || (data && data.error)) {
        return { error: data.error };
    }
    
    let { name } = _params;


    let todo = await Todo.findByPk(todoId).catch(error => {
            return{error}
    });
    
    if (!todo || (todo && todo.error)) {
         return { error: 'Todo not found' };
     }

        todo.name = name;

    let update = await todo.save().catch((err) => {
        return {error:err}
    });

    if (!update || (update && update.error)) {
        console.log(error)
        return {error: 'Error updating todo'}
    }
    
    console.log(update)
    return{data:update}
    
}


async function deleteTodo(todoId) {

    let todo = await Todo.findByPk(todoId).catch(error => {
            return{error}
        });
    if (!todo || (todo && todo.error)) {
            return { error: 'Todo not found' };
    }

    let deleting =await Todo.destroy({where:{id:todoId}})
    
    if (!deleting || (deleting && deleting.error)) {
        return { error: 'Todo deleted successfully' }
    }

      return {data:"task is deleted"}
}

module.exports = {viewAllTodo,createTodo,updateTodo,deleteTodo}