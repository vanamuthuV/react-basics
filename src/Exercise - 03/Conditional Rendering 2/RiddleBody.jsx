import React from "react";

export const Riddle = (props) => {
    return (
        <div>
            <p className="P1" onClick={() => props.handleclick(props.id)}>Riddle : {props.Question }</p>
            {props.isShown ? <p className="P2" >Answer : {props.Answer}</p> : "" }
        </div>
    )
}