import React, { useState } from "react";

import "./PasswordGenerator.css";

function PasswordGenerator() {
  return (
    <div className="container">
      <div className="password-box">
        <h1>Password Generator</h1>
        <p id="password">24324</p>
      </div>
      <div className="principal-box">
        <p>Character Length</p>
        <p>10</p>
        <input type="range" name="" min="5" max="10" id="character-length" />
        <div className="check-list">
          <div className="uppercase-box">
            <input type="checkbox" name="Uppercase" id="Uppercase" />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="lowercase-box">
            <input type="checkbox" name="Lowercase" id="Lowercase" />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="numbers-box">
            <input type="checkbox" name="Numbers" id="Numbers" />
            <p>Include Numbers</p>
          </div>
          <div className="symbol-box">
            <input type="checkbox" name="Symbols" id="Symbols" />
            <p>Include Symbols</p>
          </div>
        </div>
        <p>Strength</p>
        <button>Generate &rarr</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
