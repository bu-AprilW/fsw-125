import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"


function Bounty(props) {
    const {firstName, lastName, bountyAmount, living, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bountyContainer">
            { !editToggle ?
                <>
                    <h1>Name: {firstName} {lastName} </h1>
                    <h3>{bountyAmount}</h3>
                    <h3>{living}</h3>
                    <h3>{type}</h3>
                    <button
                        className="deleteBtn" 
                        onClick={() => props.deleteBounty(_id)}>
                            Delete
                    </button>
                    <button
                        className="editBtn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                            Edit
                        </button>
                    </>
                    :
                    <>
                        <AddBountyForm
                            id="submit"
                            firstName={firstName}
                            lastName={lastName}
                            bountyAmount={bountyAmount}
                            living={living}
                            type={type}
                            _id={_id}
                            btnText="Submit Edit"
                            submit={props.editBounty}/>
                        <button
                            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                                Close
                            </button>
                        </>
        }
        </div>
    );

}

export default Bounty