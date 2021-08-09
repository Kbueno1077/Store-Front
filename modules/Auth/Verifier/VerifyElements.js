import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import RotateRightIcon from "@material-ui/icons/RotateRight";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "20px",

    "@media (max-height: 500px) and (orientation: landscape)": {
      padding: "40px",
      height: "100%",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "400px",
    paddingBottom: "20px",
    height: "max-content",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0px 5px 5px #888888",
    borderRadius: "5px",
    border: "1px solid silver",
  },
  imageClass: {
    margin: "auto",
    "@media (max-width: 925px)": {
      display: "none",
    },
  },
  title: {
    color: "#303F9F",
    margin: "35px 20px 35px",

    "@media (max-height: 400px)": {
      margin: "20px 0px 20px",
    },
  },

  texts: {
    padding: "0 30px 0",
  },

  input: {
    height: "50px",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "100%",
  },

  linkswrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  onlylink: { textAlign: "center", width: "100%" },
}));
export { useStyles };

export const LoadingIcon = styled(RotateRightIcon)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 1s linear infinite;
`;
