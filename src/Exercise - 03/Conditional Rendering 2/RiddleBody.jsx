import React from "react";

export const Riddle = (props) => {
    return (
      <div>
        <div className="Answer-Div">
          <p className="P1">Riddle : {props.Question}</p>
          <button onClick={() => props.handleclick(props.id)}>
            Reveal Answer
          </button>
        </div>
        {props.isShown && <p className="P2">Answer : {props.Answer}</p>}
      </div>
    );
}