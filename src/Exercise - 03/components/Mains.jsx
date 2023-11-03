import React, { useEffect, useState } from "react";

let Rand;
const Store = []
let Data
const url = " https://api.imgflip.com/get_memes";

const Fetcher = () => {
 
}

Fetcher()

export const Maines = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/19vcz0.jpg",
    imgname : "Pawn Stars"
  });

  const [allmemeimages, setAllmemeimages] = useState(Data)

  useEffect(() => {
     fetch(url).then((res) => {
       res.json().then((data) => {
         Data = data.data.memes;
         setAllmemeimages(Data)
       });
     });
  })

  const Random = () => {
    Rand = Math.floor(Math.random() * allmemeimages.length);
    console.log(Rand)
    const imgPath = allmemeimages[Rand].url;
    console.log(imgPath);
    setMeme(prev => {
      return {
        ...prev,
        randomImage: allmemeimages[Rand].url,
        imgname : allmemeimages[Rand].name
      }
    })
  };

  const valueTaker = (event) => {
    const { name, value } = event.target
    setMeme((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const Storer = (event) => {
    event.preventDefault()
    Store.push(meme)
  }

  return (
    <div className="Form-div">
      <form onSubmit={(event) => Storer(event)} className="Form">
        <div>
          <input
            className="Meme1"
            placeholder="Top Text"
            type="text"
            onChange={(event) => {
              valueTaker(event);
            }}
            value={meme.topText}
            name="topText"
          ></input>
          <input
            className="Meme2"
            placeholder="Bottom Text"
            type="text"
            onChange={(event) => {
              valueTaker(event);
            }}
            name="bottomText"
            value={meme.bottomText}
          ></input>
        </div>
        <button onClick={Random}>Get a new meme image</button>
      </form>
      <div className="Img-div">
        <img className="Meme" src={meme.randomImage}></img>
        <h1 className="Top-Text">{meme.topText}</h1>
        <h1 className="Bottom-Text">{meme.bottomText}</h1>
      </div>
      <p style={{ color: 'gray', fontSize : '20px', marginTop : '5px', marginBottom : '0px'}}>{meme.imgname}</p>
    </div>
  );
}