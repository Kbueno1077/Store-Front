import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

export const PriceWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 0.2em;
`;

export const PriceRangeWrapper = styled.div`
  display: flex;
`;

export const StyledTypo = styled(Typography)`
  font-size: 0.8rem;
  color: gray;
`;

export const PrettoSlider = withStyles({
  root: {
    color: "#FEA735",
    height: 8,
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -9,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50%)",
  },
  track: {
    marginTop: -1,
    height: 5,
    borderRadius: 4,
  },
  rail: {
    height: 3,
    borderRadius: 4,
  },
})(Slider);
