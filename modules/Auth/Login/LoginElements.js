import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import RotateRightIcon from "@material-ui/icons/RotateRight";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "0px 40px",

    "@media (max-height: 400px) and (orientation: landscape)": {
      padding: "40px",
      height: "100%",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    paddingBottom: "20px",
    maxWidth: "350px",
    height: "max-content",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0px 5px 5px #888888",
    borderRadius: "5px",
    border: "1px solid silver",
  },
  imageClass: {
    margin: "auto",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    transform: "translate(0, -30px)",
    boxShadow: "0px 7px 15px #888888",

    "@media (max-height: 400px)": {
      display: "none",
    },
  },
  title: {
    color: "#303F9F",
    margin: "30px 0px 30px",

    "@media (max-height: 400px)": {
      margin: "20px 0px 20px",
    },
  },

  texts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "0px 30px 0px",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkswrapper: {
    display: "flex",
    padding: "5px 50px 5px",

    width: "100%",
    justifyContent: "space-between",
  },

  linked: {
    color: "#303F9F",
    fontSize: "15px",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  inputwrapper: { margin: "10px 0 20px" },
  input: {
    height: "50px",
  },

  goback: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
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
