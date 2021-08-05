import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

function index({ name, cssType, inputComponent, ...otherProps }) {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField
      {...configTextfield}
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
