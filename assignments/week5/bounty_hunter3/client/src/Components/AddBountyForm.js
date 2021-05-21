import React, { useState } from "react"



export default function AddBountyForm(props) {
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || "",
        bountyAmount: props.bountyAmount || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    function handleLiving(e) {
        const x = e.target.value

        switch(x) {
            case "true":
                return setInputs(prevInputs => ({...prevInputs, living: true}))

            case "false":
                return setInputs(prevInputs => ({...prevInputs, living: false}))

            default:
                setInputs(initInputs)
        }
    }

        return(
            <form onSubmit={handleSubmit} id="bounty">
                <input type="text" name="firstName" placeholder="First Name" value={inputs.firstName} onChange={handleChange}/>
                <input type="text" name="lastName" placeholder="Last Name" value={inputs.lastName} onChange={handleChange}/>
                <input name="living" type="text" placeholder="Living" value={inputs.living} onChange={handleLiving}/>
                <input type="number" name="bountyAmount" placeholder="Bounty Amount" value={inputs.bountyAmount} onChange={handleChange}/>
                <input type="text" name="type" placeholder="Type" value={inputs.type} onChange={handleChange}/>
                <button id="formBtn">{props.btnText}</button>
            </form>
        )
}