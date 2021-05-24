import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"


export default function Bounty(props) {
    const {firstName, lastName, bountyAmount, living, type, _id} = props
    const [editToggle, setEditToggle] = useState({ id: 0, toggle: false, })
    return (
        <div className="bounty">
            { !editToggle ?
            <>
                <h2>{props.firstName}</h2>
                <h2>{props.lastName}</h2>
                <p>Bounty Amount: {props.bountyAmount}</p>
                <p>Living: {props.living}</p>
                <p>Type: {props.type}</p>
            <button className="delBtn"
                onClick={() => props.deleteBounty(_id)}>Delete</button>

            <button className="editBtn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
    :
        <>
            <AddBountyForm
                firstName={firstName}
                lastName={lastName}
                bountyAmount={bountyAmount}
                living={living}
                type={type}
                _id={_id}
                btnText="Submit"
                submit={props.editBounty}/>
            <br/>
            <button
                className="closeBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}
