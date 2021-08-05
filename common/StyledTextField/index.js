import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function index({
  name,
  value,
  cssType,
  onChange,
  inputComponent,
  ...otherProps
}) {
  const configTextfield = {
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
    margin: "normal",
  };

  return (
    <CssTextField
      {...otherProps}
      {...configTextfield}
      name={name}
      onChange={onChange}
      value={value}
      InputProps={{
        className: cssType,
        inputComponent: inputComponent,
      }}
    />
  );
}

export default index;

export const CssTextField = withStyles({
  root: {
    width: "100%",

    "& label.Mui-focused": {
      color: "#303F9F",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#303F9F",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "default",
      },
      "&:hover fieldset": {
        borderColor: "#303F9F",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#303F9F",
      },
    },
  },
})(TextField);
