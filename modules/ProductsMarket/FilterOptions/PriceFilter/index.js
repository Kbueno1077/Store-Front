import React, { useState } from "react";
import {
  PriceWrapper,
  PrettoSlider,
  PriceRangeWrapper,
  StyledTypo,
} from "./PriceFilterElements";

function PriceFilter() {
  const [value, setValue] = useState([0, 2000]);

  function valuetext(value) {
    return `${value} $`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <PriceWrapper>
      {" "}
      <PrettoSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={2000}
        min={0}
      />
      <PriceRangeWrapper isgrid={0}>
        <StyledTypo id="range-slider" gutterBottom>
          Desde: {value[0] <= value[1] ? value[0] : value[1]} $
        </StyledTypo>
        <StyledTypo
          style={{ marginLeft: "auto", marginRight: "0" }}
          id="range-slider"
          gutterBottom
        >
          Hasta: {value[0] <= value[1] ? value[1] : value[0]} $
        </StyledTypo>
      </PriceRangeWrapper>
    </PriceWrapper>
  );
}

export default PriceFilter;
