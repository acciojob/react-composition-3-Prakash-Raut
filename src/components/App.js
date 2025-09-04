
import React from "react";
import { useState } from "react";

import './../styles/App.css';


const Tooltip = ({ text, children, Tag = "p" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tag
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && <div className="tooltip-text">{text}</div>}
    </Tag>
  );
};

const arr = [
  {
    id: 1,
    text: "This is a tooltip",
    children: "Hover over me",
    Tag: "h2"
  },
  {
    id: 2,
    text: "This is another tooltip",
    children: "Hover over me to see another tooltip",
    Tag: "p"
  }
] 

const App = () => {
  return (
    <div>
      {arr.map((item) => (
        <Tooltip key={item.id} text={item.text} Tag={item.Tag}>
          {item.children}
        </Tooltip>
      ))}
    </div>
  )
}

export default App
