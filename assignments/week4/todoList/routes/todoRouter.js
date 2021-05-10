const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const todoItems = [
    {
        name: "Do the laundry",
        description: "Wash and dry clothes",
        imageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMGxhdW5kcnklMjBhdCUyMGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Start Dinner",
        description: "Put the pot roast in the crockpot",
        imageUrl: "https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Get dog food",
        description: "Buy some dog food",
        imageUrl: "https://images.unsplash.com/photo-1596491123074-fd69f1b7c12d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completes: true,
        _id: uuidv4()
    },
]

todoRouter.route("/")
    .get((req, res) => {
        res.send(todoItems)
    })

    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todoItems.push(newTodo)
        res.send('Added ${newTodo.name} to the list')
    })


todoRouter.route('/:todoId')
    .get((req, res) => {
        const todoId = req.params.todoId
        const foundTodo = todoItems.find(todo => todo._id === todoId)
        res.send(foundTodo)
    })

    .put((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todoItems.findIndex(todoItems => todoItems._id === todoId)
        const updateT0do = Object.assign(todoItems[todoIndex], req.body)
        res.send(updateTodo)
    })
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todoItems.findIndex(todoItems => todoItems._id === todoId)
        todoItems.splice(todoIndex, 1)
        res.send("Todo deleted!")
    })


    module.exports = todoRouter