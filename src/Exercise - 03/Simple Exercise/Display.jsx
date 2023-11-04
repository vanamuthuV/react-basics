import React, { useEffect, useState } from "react";

export const Tracker = () => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const Watchwidth = () => {
            console.log("Setting...")
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", Watchwidth)

        return () => {
            console.log("Cleaning...")
            removeEventListener("resize" , Watchwidth)
        }
    },[])

    return <h1>{window.innerWidth }</h1>
}