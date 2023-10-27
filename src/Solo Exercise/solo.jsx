import React from "react";
import "../Solo Exercise/solo.css"
import { Data } from "./data";
import { About } from "./data";
import { Interests } from "./data";
import mail from "../../public/assets-for-solo Exercise/mail.svg";
import linkedin from "../../public/assets-for-solo Exercise/linkedin.svg";
import Twitter from "../../public/assets-for-solo Exercise/twitter.svg";
import Facebook from "../../public/assets-for-solo Exercise/facebook.svg";
import Instagram from "../../public/assets-for-solo Exercise/instagram.svg";
import GitHub from "../../public/assets-for-solo Exercise/github.svg";

const clicker = (value) => {
    open(value)
}

export const Render = () => {
    return (
      <div className="Outer">
        {Data.map((Pack) => {
          return (
            <Structure {...Pack} />
          );
        })}
      </div>
    );
}

const Structure = (props) => {

    const {img,names,role,web,weblink,weblink1} = props

    return (
      <div className="Major-Outer">
        <img className="img" src={img}></img>
        <div className="Outer-inner-div">
          <h3 className="Info" id="Info">{names}</h3>
          <h4 className="Info" id="Info1">{role}</h4>
          <h5 className="Info" id="Info2">{web}</h5>
          <div className="Button-aligner">
            <button className="Mail" onClick={(event) => open(props.weblink)}>
              {" "}
              <span>
                <img src={mail}></img>
              </span>{" "}
              Email
            </button>
            <button
              className="LinkedIn"
              onClick={(event) => open(props.weblink1)}
            >
              {" "}
              <span>
                <img src={linkedin}></img>
              </span>{" "}
              LinkedIn
            </button>
          </div>
        </div>
        <div className="Outer-inner-div1">
          <div className="para-div">
            <h1 className="para-heading">About</h1>
            <p className="para">{About}</p>
          </div>
          <div className="para-div">
            <h1 className="para-heading">Interests</h1>
            <p className="para">{Interests}</p>
          </div>
        </div>
        <div className="Footer">
          <img src={Twitter}></img>
          <img src={Facebook}></img>
          <img src={Instagram}></img>
          <img src={GitHub}></img>
        </div>
      </div>
    );
}