const express = require("express")
const dogRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const dogs = [
    {
        dogBreed: "Chihuahua",
        energyLevel: "Medium",
        size: "Small",
        _id: uuidv4()
    },
    {
        dogBreed: "Weimaraner",
        energyLevel: "High",
        size: "Large",
        _id: uuidv4()
    },
    {
        dogBreed: "German Shepherd",
        energyLevel: "High",
        size: "Large",
        _id: uuidv4()
    },
    {
        dogBreed: "Bernese Mountain Dog",
        energyLevel: "Low",
        size: "Large",
        _id: uuidv4()
    },
    {
        dogBreed: "Corgi",
        energyLevel: "Medium",
        size: "Large",
        _id: uuidv4()
    }
]

dogRouter.route("/")
    .get((req, res) => {
        res.send(dogs)
})


dogRouter.get("/", (req, res) => {
    res.send(dogs)
})

dogRouter.get("/:dogId", (req, res) => {
    const dogId = req.params.dogId
    const getDog = dogs.find((dog) => dog._id === dogId)
    res.send(getDog)
})

dogRouter.get("/search/dogBreed", (req, res) => {
    const dogBreed = req.query.dogBreed
    const foundDogs = dogs.filter((dog)  => dog.dogBreed === dogBreed)
    res.send(foundDogs)
})

dogRouter.post("/", (req, res) => {
    const newDog = req.body;
    newDog.id = uuidv4()
    dogs.push(newDog)
    res.send('New dog added successfully!')
})

dogRouter.delete("/:dogId", (req, res) => {
    const dogId = req.params.dogId
    const dogIndex = dogs.findIndex((dog) => dog._id  === dogId)
    dogs.splice(dogIndex, 1)
    res.send("Dog deleted")
})

dogRouter.put("/:dogId", (req, res) => {
    const dogId = req.params.dogId
    const dogIndex = dogs.findIndex((dog) => dog._id === dogId)
    const updateObject = req.body
    const updateDog = Object.assign(dogs[dogIndex], updateObject)
    res.send(updateDog)
})

module.exports = dogRouter