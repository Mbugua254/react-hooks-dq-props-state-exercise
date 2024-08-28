// BabyHog.js

import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

//Mapping Eye Color to images
const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby,
  default: normalBaby,
};

function BabyHog({ name, hobby, eyeColor }) {
  const [weight, setWeight] = useState(100);

  function handleChangeWeight(e) {
    const change = e.target.name === "+" ? 5 : -5;
    setWeight(weight + change);
  }

  const currentImage = eyeColorMapper[eyeColor] || eyeColorMapper.default;

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight} lbs</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          src={currentImage}
          style={{ height: `${weight}px` }}
          alt="BabyHog"
        />
      </div>
    </li>
  );
}

export default BabyHog;
