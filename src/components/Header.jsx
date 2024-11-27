import React, { useState } from "react";
import "./styles/Header.css";
export default function Header() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Welcom Back,</h1>
      <p>Date: {date.toDateString()}</p>
      <ul>
        <li>Feed</li>
        <li>Popular</li>
        <li>Politics</li>
        <li>Sports</li>
      </ul>
    </div>
  );
}
