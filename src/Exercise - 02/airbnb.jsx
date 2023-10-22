import React from "react";
import "./airbnb.css"
import { Header } from "./components/Header";
import { Body } from "./components/body";
import { Footer } from "./components/Footer";

export const Render = () => {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
}