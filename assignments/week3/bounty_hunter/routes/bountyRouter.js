const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid')


const bounties = [
    { 
        firstName: "Wicket",
        lastName: "Warrick", 
        living: true,
        bountyAmount: 50000,
        type: "Jedi", 
        _id: uuidv4() 
    },
    { 
        firstName: "Qui-Gon", 
        lastName: "Jinn", 
        living: false, 
        bountyAmount: 100000, 
        type: "Jedi", 
        _id: uuidv4() 
    },
    { 
        firstName: "Chewbacca", 
        lastName: "Unknown", 
        living: true, 
        bountyAmount: 500000, 
        type: "Jedi", 
        _id: uuidv4() 
    },
    { 
        firstName: "Jabba", 
        lastName: "Hut", 
        living: false, 
        bountyAmount: 5, 
        type: "Sith", 
        _id: uuidv4() 
    },
    { 
        firstName: 'Darth', 
        lastName: 'Maul', 
        living: false, 
        bountyAmount: 15, 
        type: 'sith', 
        _id: uuidv4() 
    },
]


.get("/", (req, res) => {
    res.send(bounties)
})

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send("Bounty Added: ${newBounty.firstName} ${newBounty.lastName}")
    })

bountyRouter.route("/:bountyId")
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const bountiesIndex = bounties.findIndex(bounties._id === bountyId)
        const updateBounty = Object.assign(bounties[bountiesIndex], req,body)
        res.send(updateBounty)
    })

    .delete((req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send("Bounty deleted!")
    })

module.exports = bountyRouter