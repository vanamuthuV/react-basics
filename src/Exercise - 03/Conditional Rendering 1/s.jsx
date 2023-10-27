import "./in.css"
import React, { useState } from "react";
import { Data } from "./d";

export const MainBody = (props) => {

  const color = {
    backgroundColor: props.on ? "Green" : "Red",
  };

  // const Clicked = () => {
  //   setFlip(prevOn => !prevOn)
  // }

  return (
    <div className="H" style={color} onClick={() => props.func(props.id)} >
      <p>ID : {props.id}</p>
      <p>ON : {props.on ? "Itz True" : "Itz False"}</p>
    </div>
  )
}