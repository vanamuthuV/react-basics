import React, { useState } from "react";

const Messages = ["Hey THere" , "Im hame"]

export const Render = () => {
    return (
        <div>
            {Messages.length ?
                Messages.length === 1 ?
                    <p>Hey You Have 1 Message Unread Check Out</p> :
                    <p>Hey there you have {Messages.length} unread messages...</p> :
                `You're all caught up`
            }
            {Messages.map((item) => {
               return <p>{item}</p>
            })}
        </div>
    )
}