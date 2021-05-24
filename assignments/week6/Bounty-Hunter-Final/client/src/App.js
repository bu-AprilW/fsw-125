import React, { useState, useEffect } from "react";
import axios from 'axios'
import Bounty from './Components/Bounty.js'
import AddBountyForm from './Components/AddBountyForm.js'


export default function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete('/bounties/bountyId')
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
    axios.put('/bounties/bountyId', updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div>
      <h1 className="title">Bounty Hunters</h1>
      <div className="addB">
        <AddBountyForm
          sendBounty={addBounty}/>
      </div>
      <div className="newBount">
        {
         bounties.map(bounty =>
            <Bounty
              {...bounty}
              key={bounty._id}
              deleteBounty={deleteBounty}
              editBounty={editBounty}/>)
        }
      </div>
      <footer id="footer">
        FSW-125 2021
      </footer>
    </div>
  );
}
