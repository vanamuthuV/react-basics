import React from "react";
import { ReactDOM } from "react";
import imgs from "../assets/react.svg";

const Data = [
  "Was released in 2013",
  "Was Originally created by Jordan walke",
  "Has well over 100K star on github",
  "Is maintained by facebook",
  "Powers thousands of enterprises apps, including the mobile apps"
]

const PropertiesOfReact = ["Pricing","About","Contact"];

const Header = () => {
  return (
    <header>
      <nav className="Navs">
          <img src={imgs} className="imgs"></img>
          <ul id="props">
            {PropertiesOfReact.map(prop => {
              return <li>{prop}</li>
            })}
          </ul>
      </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <footer>
      <small>@ 2023 Vanamuthu V | All rights reserved</small>
    </footer>
  );
}

const MainComponent = () => {
  return (
    <div>
      <center>
        <h1>Fun Facts About React</h1>
      </center>
      <ul>
        {Data.map((ele) => {
          return <li>{ele}</li>;
        })}
      </ul>
    </div>
  );
}

export const Render = () => {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}
