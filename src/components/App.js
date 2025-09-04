
import React from "react";
import { useState } from "react";

import './../styles/App.css';

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && <div className="tooltip-text">{text}</div>}
    </div>
  );
};

const arr = [
  {
    id: 1,
    text: "This is a tooltip",
    children: "Hover over me"
  },
  {
    id: 2,
    text: "This is another tooltip",
    children: "Hover over me to see another tooltip"
  }
]

const App = () => {
  return (
    <div>
      {arr.map((item) => (
        <Tooltip key={item.id} text={item.text} >
          {item.children}
        </Tooltip>
      ))}
    </div>
  )
}

export default App
