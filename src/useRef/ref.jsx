import React, { useEffect, useRef } from "react";

export const Render = () => {

    const re = useRef(null)
    const res = useRef(null)

    const Diplayer = () => {
        console.log(re.current.value)
        console.log(re.current.placeholder)
        console.log(re.current)
        console.log(res.current)
    }

    useEffect(() => {
        console.log(re.current)
        re.current.focus() 
    })

    return (
        <div>
            <input ref={re} placeholder="Enter Something"></input>
            <p ref={res} >Madar Chod</p>
            <button onClick={Diplayer}>Click me</button>
        </div>
    )
}