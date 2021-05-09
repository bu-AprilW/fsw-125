const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const todoItems = [
    {
        name: "Do the laundry",
        description: "Wash and dry clothes",
        imageUrl: "",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Start Dinner",
        description: "Put the pot roast in the crockpot",
        imageUrl: "",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Get dog food",
        description: "Buy some dog food",
        imageUrl: "",
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