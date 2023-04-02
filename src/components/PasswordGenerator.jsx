import React, { useState } from "react";
import { useRef } from "react";

import "./PasswordGenerator.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [numbers, checkNumbers] = useState(false);
  const [symbols, checkSymbols] = useState(false);
  const [uppercase, checkUppercase] = useState(false);
  const [lowercase, checkLowercase] = useState(false);
  const [alerta, displayAlert] = useState("");
  const [strength, changeStrength] = useState("WEAK");
  var bar1Ref = useRef();
  var bar2Ref = useRef();
  var bar3Ref = useRef();
  var bar4Ref = useRef();

  function setStrength(length) {
    if (length >= 5 && length <= 6) {
      changeStrength("TOO WEAK!");
      bar1Ref.current.style.backgroundColor = "hsl( 0 91% 63% )";
      bar1Ref.current.style.border = "none";
      bar2Ref.current.style.backgroundColor = "";
      bar2Ref.current.style.border = "white 0.15rem solid";
      bar3Ref.current.style.backgroundColor = "";
      bar3Ref.current.style.border = "white 0.15rem solid";
      bar4Ref.current.style.backgroundColor = "";
      bar4Ref.current.style.border = "white 0.15rem solid";
    } else if (length >= 7 && length <= 8) {
      changeStrength("WEAK!");
      bar1Ref.current.style.backgroundColor = "hsl(13 95% 66%)";
      bar1Ref.current.style.border = "none";
      bar2Ref.current.style.backgroundColor = "hsl(13 95% 66%)";
      bar2Ref.current.style.border = "none";
      bar3Ref.current.style.backgroundColor = "";
      bar3Ref.current.style.border = "white 0.15rem solid";
      bar4Ref.current.style.backgroundColor = "";
      bar4Ref.current.style.border = "white 0.15rem solid";
    } else if (length >= 9 && length <= 10) {
      changeStrength("MEDIUM!");
      bar1Ref.current.style.backgroundColor = "hsl(42 91% 68%)";
      bar1Ref.current.style.border = "none";
      bar2Ref.current.style.backgroundColor = "hsl(42 91% 68%)";
      bar2Ref.current.style.border = "none";
      bar3Ref.current.style.backgroundColor = "hsl(42 91% 68%)";
      bar3Ref.current.style.border = "none";
      bar4Ref.current.style.backgroundColor = "";
      bar4Ref.current.style.border = "white 0.15rem solid";
    } else {
      changeStrength("STRONG!");
      bar1Ref.current.style.backgroundColor = "hsl(127 100% 82%)";
      bar1Ref.current.style.border = "none";
      bar2Ref.current.style.backgroundColor = "hsl(127 100% 82%)";
      bar2Ref.current.style.border = "none";
      bar3Ref.current.style.backgroundColor = "hsl(127 100% 82%)";
      bar3Ref.current.style.border = "none";
      bar4Ref.current.style.backgroundColor = "hsl(127 100% 82%)";
      bar4Ref.current.style.border = "none";
    }
  }

  const setSlide = (e) => {
    setPasswordLength(e.target.value);

    setStrength(e.target.value);
  };

  const generatePassword = () => {
    var numberList = "1234567890";
    var symbolList = "!@#$%&*<>{}[]?";
    var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseList = "abcdefghijklmnopqrstuvwxyz";

    var validContent = "";

    if (uppercase) {
      validContent += uppercaseList;
    }

    if (lowercase) {
      validContent += lowercaseList;
    }

    if (numbers) {
      validContent += numberList;
    }

    if (symbols) {
      validContent += symbolList;
    }

    if (
      uppercase === false &&
      lowercase === false &&
      numbers === false &&
      symbols === false
    )
      displayAlert("Please select one or more options");

    if (
      uppercase === true ||
      lowercase === true ||
      numbers === true ||
      symbols === true
    )
      displayAlert("");

    var finalPassword = "";
    var randomIndex;

    for (let i = 0; i < passwordLength; i++) {
      randomIndex = Math.round(Math.random() * validContent.length);
      finalPassword += validContent.charAt(randomIndex);
    }

    setPassword(finalPassword);
  };

  return (
    <div className="container">
      <div className="password-box">
        <h1>Password Generator</h1>
        <input
          type="text"
          disabled
          placeholder="P4$5W0rD!"
          id="password"
          value={password}
        />
      </div>
      <div className="principal-box">
        <div className="principal-top">
          <p className="principal-box-title">Character Length</p>
          <p className="length-number">{passwordLength}</p>
        </div>
        <input
          type="range"
          name=""
          min="5"
          max="15"
          id="slide"
          onChange={setSlide}
        />
        <div className="check-list">
          <div className="uppercase-box">
            <input
              type="checkbox"
              name="Uppercase"
              id="Uppercase"
              onClick={() => checkUppercase(!uppercase)}
            />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="lowercase-box">
            <input
              type="checkbox"
              name="Lowercase"
              id="Lowercase"
              onClick={() => checkLowercase(!lowercase)}
            />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="numbers-box">
            <input
              type="checkbox"
              name="Numbers"
              id="Numbers"
              onClick={() => checkNumbers(!numbers)}
            />
            <p>Include Numbers</p>
          </div>
          <div className="symbol-box">
            <input
              type="checkbox"
              name="Symbols"
              id="Symbols"
              onClick={() => checkSymbols(!symbols)}
            />
            <p>Include Symbols</p>
          </div>
        </div>
        <div className="passwordStrength">
          <p className="strength">Strength</p>
          <div>
            <p className="strength-value">{strength}</p>
            <div className="bar1" ref={bar1Ref}></div>
            <div className="bar2" ref={bar2Ref}></div>
            <div className="bar3" ref={bar3Ref}></div>
            <div className="bar4" ref={bar4Ref}></div>
          </div>
        </div>
        <button onClick={generatePassword}>Generate</button>
      </div>
      <p className="alert">{alerta}</p>
    </div>
  );
}

export default PasswordGenerator;
