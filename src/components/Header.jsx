import React, { useState } from "react";
import "./styles/Header.css";

export default function Header({ setCurrentFeed }) {
  const [date, setDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState("tesla");

  const handleClick = (item) => {
    setSelectedItem(item);
    if (setCurrentFeed) {
      setCurrentFeed(item.toLowerCase());
    }
  };

  return (
    <div>
      <h1>Welcome Back,</h1>
      <p>Date: {date.toDateString()}</p>

      <ul>
        <li
          onClick={() => handleClick("tesla")}
          className={selectedItem === "tesla" ? "selected" : ""}
        >
          Tesla
        </li>
        <li
          onClick={() => handleClick("Popular")}
          className={selectedItem === "Popular" ? "selected" : ""}
        >
          Popular
        </li>
        <li
          onClick={() => handleClick("Politics")}
          className={selectedItem === "Politics" ? "selected" : ""}
        >
          Politics
        </li>
        <li
          onClick={() => handleClick("Sports")}
          className={selectedItem === "Sports" ? "selected" : ""}
        >
          Sports
        </li>
      </ul>

      <div>
        {/* {selectedItem && <h2>You selected: {selectedItem}</h2>} */}
        {selectedItem === "tesla" && <p>This is the tesla section.</p>}
        {selectedItem === "Popular" && <p>This is the Popular section.</p>}
        {selectedItem === "Politics" && <p>This is the Politics section.</p>}
        {selectedItem === "Sports" && <p>This is the Sports section.</p>}
      </div>
    </div>
  );
}
