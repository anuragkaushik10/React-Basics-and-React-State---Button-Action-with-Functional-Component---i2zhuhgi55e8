import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click me
      </button>
      {clicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool.This makes me
          so happy
        </p>
      )}
    </div>
  );
}

export default App;
