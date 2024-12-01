import React from "react";
import { Slider } from "@mui/material";

export default function BasicSlider({ value, onChange }) {
  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <p>Current level: {value}</p>
      <Slider
        value={value}
        onChange={onChange}
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
