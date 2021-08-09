import React, { useState } from "react";
import {
  RatingsWrapper,
  StyledRatings,
  StyledTypography,
} from "./RatingsFilterElements";

function RatingFilter({ name, id }) {
  const [rating_value, setRatingValue] = useState(0);

  return (
    <RatingsWrapper>
      <StyledRatings
        name={name}
        id={id}
        rating_value={rating_value}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
        }}
        precision={0.5}
      />
      <StyledTypography id="ratingsTypo" gutterBottom>
        o más
      </StyledTypography>
    </RatingsWrapper>
  );
}

export default RatingFilter;
