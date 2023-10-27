import React, { useState } from "react";
import { Data } from "./API Data";

let Rand;

export const Maines = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage : Data[0].url
  })

  const [allmemeimages, setAllmemeimages] = useState(Data)

  const Random = () => {
    Rand = Math.floor(Math.random() * allmemeimages.length);
    console.log(Rand)
    const imgPath = allmemeimages[Rand].url;
    console.log(imgPath);
    setMeme(prev => {
      return {
        ...prev,
        randomImage : allmemeimages[Rand].url
      }
    })
  };

  return (
      <div className="Form-div">
        <div className="Form">
          <div>
            <input className="Meme1" placeholder="Top Text" type="text"></input>
            <input
              className="Meme2"
              placeholder="Bottom Text"
              type="text"
            ></input>
          </div>
        <button onClick={Random}>Get a new meme image</button>
      </div>
      <div className="Img-div">
        <img className="Meme" src={meme.randomImage}></img>
      </div>
      </div>
  );
}