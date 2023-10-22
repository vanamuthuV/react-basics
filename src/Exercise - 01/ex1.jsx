import React from "react";
import img1 from "../assets/reactlogo.svg";

const Header = () => {
    return (
      <nav>
        <div className="react-header-div">
          <img className="react-icon" src={img1}></img>
          <h1 className="react-name">ReactFacts</h1>
        </div>
            <h2 className="react-course">React Course - Project 1</h2>
      </nav>
    );
}

const Data = [
  "Was Frist released in 2013",
  "Was Originally created by Jordan walke",
  "Has well over 100K star on github",
  "Is maintained by facebook",
  "Powers thousands of enterprises apps, including the mobile apps",
];

const MainContent = () => {
    return (
      <main>
        <h1 className="Fun">Fun facts about React</h1>
        <div>
          <ul>
            {Data.map((ele) => {
              return <li>{ele}</li>;
            })}
          </ul>
        </div>
      </main>
    );
}

export const Render = () => {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
}   