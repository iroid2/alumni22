import React from "react";
import Button from "./Button";

export default function HeroSectn() {
  return (
    <div className="heroSection center fl-column">
      <div className="overally"></div>
      <div className="hero-text">
        <div className="subTitle">Our Agency</div>
        <h1 className="title">Maso Assoiciation</h1>
        <Button title={"Explore News"} />
      </div>
    </div>
  );
}
