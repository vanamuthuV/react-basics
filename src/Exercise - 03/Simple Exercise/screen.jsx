import React, { useState } from "react";
import { Tracker } from "./Display";

export const Render = () => {

    const [show, setShow] = useState(false)

    const WidthChanger = () => setShow(prev => !prev)

    return (
        <div onChange={WidthChanger}>
            {show && <Tracker />}
            <button onClick={WidthChanger} >{show === true ? "Hide Diplayer" : "Show Displayer"}</button>
            
        </div>
    )
}