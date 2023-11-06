import React, { useRef } from "react";

export const Render = () => {

    const re = useRef(null)

    const Diplayer = () => {
        console.log(re.current.value)
        console.log(re.current.placeholder)
        console.log(re.current)
    }

    return (
        <div>
            <input ref={re} placeholder="Enter Something"></input>
            <button onClick={Diplayer}>Click me</button>
        </div>
    )
}