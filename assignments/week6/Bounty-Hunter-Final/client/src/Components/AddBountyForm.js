import React, { useState } from 'react'


export default function AddBountyForm(props) {
    const initInputs = 
    { 
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        bountyAmount: props.bountyAmount || "",
        living: props.living || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.sendBounty(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <div>
            <h2>Bounty</h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="First Name"/>
                <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"/>
                <input
                    type="number"
                    name="bountyAmount"
                    value={inputs.bountyAmount}
                    onChange={handleChange}
                    placeholder="Bounty Amount"/>
                <input
                    type="text"
                    name="living"
                    value={inputs.living}
                    onChange={handleChange}
                    placeholder="Living?"/>
                <input
                    type="text"
                    name="type"
                    value={inputs.type}
                    onChange={handleChange}
                    placeholder="Type"/>

                <button id="addBtn">Submit</button>
            </form>
        </div>
    )
}
