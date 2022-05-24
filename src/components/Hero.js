import React from "react";
import TypeAnimation from "react-type-animation";

export default function Hero() {
  return (
    <div className="hero-container align-items-center d-flex justify-content-center">
      <div>
        <h1 className="display-1">Soo Hwangbo</h1>
        <h2 className="mt-2">Fullstack Web Developer</h2>
        <TypeAnimation
          className="my-3 pt-5"
          cursor={true}
          sequence={["I design and build cool stuff", 3000, ""]}
          wrapper="h3"
          repeat={Infinity}
        />
        <img src="./img/soo.jpg" alt="Soo" className="sooImage my-5"></img>
      </div>
    </div>
  );
}
