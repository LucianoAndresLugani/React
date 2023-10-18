import React, { useState } from "react";
import "./IAE.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [index, setIndex] = useState(0);
   
  
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    handleNextClick()
  };
  function handleNextClick() {
    setIndex(index + 1);
  }

  return (
    <>

    
     <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <h1>
    ({index + 1})
    </h1>
    </div>
    </>
   
    
  );
}

export default App;
