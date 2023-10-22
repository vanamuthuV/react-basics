import React from "react";
import { Data } from "./data";
import stars from "../assets/stars.svg";
import dot from "../assets/dot.svg";

export const Footer = () => {
    return (
        <div className="FooterOuter">
            {Data.map((props) => {
                return <FooterStructure {...props} />;
            })}
        </div>
    )
}

const FooterStructure = (props) => {

    const {img,unknown,rating,status,country,title,Price,currency} = props

    return (
      <div className="Inner-Outer">
        <div className="Content">
          <h4 className="Status">{status}</h4>
          <img className="Content-Image" src={img}></img>
        </div>
        <div>
          <p className="Rating">
            <span className="Span-Rating">
              <img className="star" src={stars}></img> {rating}
            </span>{" "}
            ({unknown}) <img className="Dot" src={dot}></img>
            {country}
          </p>
          <p className="title">{title}</p>
          <p className="Price">
            {" "}
            <span className="Span-Price">
              From {currency}
              {Price}
            </span>{" "}
            / person
          </p>
        </div>
      </div>
    );
}