import React from "react";
import Button from "./Button";

export default function HeroSectn() {
  return (
    <div className="heroSection center fl-column">
      <div className="overally"></div>
      <div className="hero-text">
        <div className="subTitle">Hey Mengo Alumni</div>
        <h1 className="title">
          Welcome <span className="tello">Home</span>{" "}
        </h1>
        <p className="intro">MOSA Alumni helps you keep mengo S.S Close</p>
        <Button title={"Explore News"} />
      </div>
    </div>
  );
}
