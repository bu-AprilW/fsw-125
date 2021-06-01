const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let bounties = [
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

router.get("/", (req, res) => {
    res.status(200).send(bounties);
});

router.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId;
    const getBounty = bounties.find((bounty) => bounty.id === bountyId);
    if (!getBounty || Object.values(getBounty).length === 0) {
        const error = new Error('Bounty Id Not Found');
        res.status(500);
        return next({ errMsg: error.message });
    } else {
        res.status(200).send(getBounty);
    }
});

router.get("/search/type", (req, res) => {
    const type = req.query.type;
    const foundBounties = bounties.filter((bounty) => bounty.type === type);
    if (!type) {
        const error = new Error("A type must be provided");
        res.status(500);
        return next({ errMsg: error.message });
    }
    res.status(200).send(foundBounties);
});

router.post("/", (req, res) => {
    const newBounty = req.body;
    newBounty.id = uuidv4();
    bounties.push(newBounty);
    res.status(201).send(newBounty);
});

router.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex((bounty) => bounty.id === bountyId);
    console.log(bountyIndex);
    if (!bountyId || bountyIndex === -1) {
        const error = new Error('Bounty Not Found');
        res.status(500);
        return next({ errMsg: error.message });
    } else {
        bounties.splice(bountyIndex, 1);
        res.status(201).send("Bounty Deleted");
    }
});

router.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex((bounty) => bounty.id === bountyId);
    const updatObject = req.body;
    const updateBounty = Object.assign(bounties[bountyIndex], updateObject);
    res.status(201).send(updateBounty);
});

module.exports = router;