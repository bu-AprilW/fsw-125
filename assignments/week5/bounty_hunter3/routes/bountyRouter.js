const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

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
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: false,
        bountyAmount: 50000,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Jabba",
        lastName: "Hutt",
        living: false, 
        bountyAmount: 50000, 
        type: "Sith", 
        _id: uuidv4()
    },
    {
        firstName: "Darth",
        lastName: "Maul",
        living: false, 
        bountyAmount: 150000, 
        type: 'sith', 
        _id: uuidv4()
    }
];


bountyRouter.get("/", (req, res) => {
    res.send(bounties);
});

bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounty.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty deleted successfully!")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})

module.exports = bountyRouter
