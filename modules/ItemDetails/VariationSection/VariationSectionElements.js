import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

export const PaperWrapper = styled(Paper)`
  margin-top: 20px;
  height: max-content;
  max-width: 2000px;
  margin: 20px 50px 0;
`;

export const CaracteristicWrapper = styled.div`
  display: grid;
  padding: 20px;
  color: rgba(0, 0, 0, 0.5);
`;

export const VariantsWrapper = styled.div`
  display: grid;
  border-left: 3px solid gray;
`;

export const SmallPicContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin-top: 5px;
`;

export const SmallPic = styled.div`
  cursor: pointer;
  border: solid;
  border-width: 1px;
  height: 80px;
  width: 80px;
  padding: 3px;
  margin: 4px 2px 0;

  &:hover {
    border-width: 2px;
    border-color: #fea735;
  }
`;

export const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "silver",
    },
    "& .MuiInputLabel-root": {
      color: "silver",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "silver",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "gray",
    },
    "&:hover .MuiInputLabel-root": {
      color: "gray",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#fea735",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fea735",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fea735",
    },
  },
});
