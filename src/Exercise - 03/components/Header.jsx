import React from "react";
import meme from "../../../public/assets-for-Exercise-03/meme.svg"
import "../meme.css"

export const Header = () => {
    return (
        <nav>
            <div>
                <img src={meme}></img>
                <h1>Meme Generator</h1>
            </div>
            <h4>React Course - Project 3</h4>
        </nav>
    )
}