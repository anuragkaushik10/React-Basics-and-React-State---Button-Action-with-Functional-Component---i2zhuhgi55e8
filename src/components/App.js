import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState("");
  function handleClick() {
    setText(
      "Hello, I've learnt to use the full-stack evaluation tool.This makes me so happy"
    );
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click me
      </button>
      <p id="para">{text}</p>
    </div>
  );
}

export default App;
