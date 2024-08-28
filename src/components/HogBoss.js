// HogBoss.js

import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js";

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue"); // Initial eye color

  // Function to handle eye color change
  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value); // Update state with selected eye color
  }

  return (
    <div>
      {/* Radio buttons for selecting eye color */}
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
        checked={eyeColor === "blue"} // Keeps the radio button checked based on state
      />
      Blue<br />
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
        checked={eyeColor === "sun"}
      />
      Sun<br />
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
        checked={eyeColor === "glowing"}
      />
      Glowing<br />

      {/* Display MasterHog's information */}
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="Boss Hog" />
      </div>

      {/* Render BabyHogs and pass the eyeColor prop */}
      <ul className="hoglist">
        {offspring.map((hog) => (
          <BabyHog
            key={hog.id}
            name={hog.name}
            hobby={hog.hobby}
            eyeColor={eyeColor} // Passing eye color as prop
          />
        ))}
      </ul>
    </div>
  );
}

export default HogBoss;
