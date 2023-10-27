import React from "react";
import photo from "../../../public/assets-for-Exercise-02/photo.svg";

export const Body = () => {
    return (
        <div className="Body">
            <img src={photo}></img>
            <div>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </div>
    )
}