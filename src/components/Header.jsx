import React, { useState } from "react";
import "./styles/Header.css";

export default function Header() {
  const [date, setDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Welcome Back,</h1>
      <p>Date: {date.toDateString()}</p>

      <ul>
        <li
          onClick={() => handleClick("Feed")}
          className={selectedItem === "Feed" ? "selected" : ""}
        >
          Feed
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

      {/* Conditionally render content based on the selected item */}
      <div>
        {selectedItem && <h2>You selected: {selectedItem}</h2>}
        {selectedItem === "Feed" && <p>This is the Feed section.</p>}
        {selectedItem === "Popular" && <p>This is the Popular section.</p>}
        {selectedItem === "Politics" && <p>This is the Politics section.</p>}
        {selectedItem === "Sports" && <p>This is the Sports section.</p>}
      </div>
    </div>
  );
}
