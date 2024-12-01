import React, { useState } from "react";
import { Slider } from "@mui/material";

export default function BasicSlider() {
  const [value, setValue] = useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <p>{value}</p>
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
