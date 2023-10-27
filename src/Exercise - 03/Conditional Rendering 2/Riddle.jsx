import React from "react";
import { useState } from "react";
import { RiddleData } from "./RiddleData";
import { Riddle } from "./RiddleBody";
import "./Riddle.css"

export const Render = () => {
    
    const [data, setData] = useState(RiddleData)

    const Reveal = (id) => {
        console.log(id)
        setData(prev => {
            const newArray = []
            for (let i = 0; i < prev.length; i++) {
                if (prev[i].id === id) {
                    const newValue = {
                        ...prev[i],
                        isShown : !prev[i].isShown
                    }
                    console.log(newValue)
                    newArray.push(newValue)
                } else {
                    newArray.push(prev[i])
                }
            }
            return newArray
        })
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