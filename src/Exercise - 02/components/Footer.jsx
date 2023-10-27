import React from "react";
import { Data } from "./data";
import stars from "../../../public/assets-for-Exercise-02/stars.svg";
import dot from "../../../public/assets-for-Exercise-02/dot.svg";

export const Footer = () => {
    return (
        <div className="FooterOuter">
            {Data.map((props) => {
                return <FooterStructure {...props} key = {props.id} />;
            })}
        </div>
    )
}

const FooterStructure = (props) => {

  const { img, unknown, rating, status,location,title,Price,currency,openSpot} = props
    
  let StatusText
  
  if (openSpot === 0) {
    StatusText = "SOLD OUT"
  } else if (location === 'ONLINE') {
    StatusText = "ONLINE"
  }

    return (
      <div className="Inner-Outer">
        <div className="Content">
          {StatusText && (
            <h4 className="Status">{StatusText}</h4>
          )}
          <img className="Content-Image" src={img}></img>
        </div>
        <div>
          <p className="Rating">
            <span className="Span-Rating">
              <img className="star" src={stars}></img> {rating}
            </span>{" "}
            ({unknown}) <img className="Dot" src={dot}></img>
            {location}
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