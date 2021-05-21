const express = require('express'); // import express
const bountyRouter = express.Router();  // set bountyRouter with express.Router()
const { v4: uuidv4 } = require('uuid');  // set a unique id using uuid


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
         _id: uuid.v4()
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
    }
];


bountyRouter.route("/")
    .get((req, res) => {
    res.send(bounties)
    })
    .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send('Successfully added ${newBounty.firstName} ${newBounty.lastName} to the bounty list!')
});

bountyRouter.route("/:id")
    .get((req, res) => {console.log(req.params.id)
        var bounty = bounties.filter((bounty) => {
            return bounty._id === (req.params.id)
        })
    res.send(bounty[0])
    })

// Get and Post
bountyRouter.route("/")
    .get((req, res) => {
    res.send(bounties)
    })
    .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send('Successfully added ${newBounty.firstName} ${newBounty.lastName} to the bounty list!')
});


// Delete and Update
bountyRouter.route("/:bountyId")
    .delete((req, res) => {
    const bountyId = req.params.bountyId
    const bounty = req.body
    bounty._id = uuidv4()
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty deleted successfully!")
})
    .put((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)

    res.send('Successfully updated!')
})

module.exports = bountyRouter