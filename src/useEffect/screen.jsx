import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Render = () => {
    const [size, setSize] = useState(window.innerWidth)

    const WidthFetcher = () => {
        return setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', WidthFetcher)
        console.log("Twice")
        return (() => {
            console.log("Cleaning Up...") // Cleaning Up is must in order to skip the bugs and free memory
            window.removeEventListener('resize',WidthFetcher) // This Will remove the previous events
        })
    })

    return (
        <h1>Window Width : { size}</h1>
    )
}