import React, { useState } from "react";
import "./CaculatorStyle.css";
import Display from "../display/Display";
import Buttons from "../buttons/Buttons";
import { evaluate, round } from "mathjs";

const Caculator = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const inputHandler = (event) => {
    if (answer === "Error") {
      return;
    }

    let val = event.target.innerText;

    let str = input + val;
    if (str.length > 14) {
      return;
    }

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else {
      setInput(str);
    }
  };

  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  const result = () => {
    if (input === "") {
      return;
    }

    let result = 0;
    let finalexpression = input;
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    try {
      result = evaluate(finalexpression);
    } catch (error) {
      result = "Error";
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };

  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else {
      setInput((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="container">
      <div className="main">
        <div className="manufacturer">
          <h2>CASIO</h2>
          <p>ELECTRONIC CACULATOR</p>
        </div>
        <Display input={input} answer={answer}></Display>
        <Buttons
          inputHandler={inputHandler}
          clearInput={clearInput}
          backspace={backspace}
          result={result}
        ></Buttons>
      </div>
      <div className="trademark">
        © 2024 Thắng Nguyễn. All rights reserved.
      </div>
    </div>
  );
};

export default Caculator;
