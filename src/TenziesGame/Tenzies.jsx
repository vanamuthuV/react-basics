import React, { useEffect, useState } from "react";
import "./Tenzies.css"

export const Render = () => {

    const number = 10
    
    const RandomArray = []
    let Rand;

    let j = 0;
    for (let i = 0; i < number; i++) {
      Rand = Math.floor(Math.random() * number);
      j += 1;
      RandomArray.push({
        value: Rand,
        isSelected: false,
        id: j,
      });
    }

    const [but,setBut] = useState(false)

    const [fristTime, setfristTime] = useState(RandomArray);

    const RandomGenerator = () => {
         setfristTime((prev) =>
           prev.map((item) => {
               return item.isSelected === true ?
               item :
                { ...item, value: (Math.floor(Math.random() * number)) }
           })
         );
    }

    const Selected = (id) => {
        console.log(id)

        setfristTime((prev) =>
            prev.map((item) => {
                return item.id === id
                    ? { ...item, isSelected : !item.isSelected}
              : item;
          })
        );
    }

    return (
        <div className="Outer">
            <h1 >Tenzeis Game</h1>
            <p style={{maxWidth : '500px'}}> "Tenzies Game is a dices rolling game in which if we type the number of dices and select a dice and roll the dices untill we get the same number in all the number of dices."</p>
            <div className="Slide">
                {console.log(fristTime)}
                {fristTime.map((item) => {
                    return (
                        <button style={item.isSelected ? {backgroundColor : '#59E391'} : {backgroundColor : 'white'}} onClick={() => Selected(item.id)} className="num" value={item.value}>{item.value}</button>
                    )
                })}
            </div>
            <button onClick={RandomGenerator} className="number">{but ? "Reset" : "Roll"}</button>
            <p>{but && <p> You Won </p>}</p>
        </div>
    )
}