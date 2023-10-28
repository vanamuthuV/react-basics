import React from "react";
import { useState } from "react";
import { RiddleData } from "./RiddleData";
import { Riddle } from "./RiddleBody";
import "./Riddle.css"

export const Render = () => {
    
    const [data, setData] = useState(RiddleData)

    const Reveal = (id) => {
      setData((prev) => {
        return prev.map((item) => {
          return item.id === id ? { ...item, isShown: !item.isShown } : item;
        });
      });
    }

    return (
      <div className="Outer">
        <div className="Header">
          <h1>Riddle Questions</h1>
          <h5>* Click on the question to reveal the answer</h5>
        </div>
        {data.map((items) => {
          return <Riddle {...items} handleclick={Reveal} key={items.id} />;
        })}
      </div>
    );

}