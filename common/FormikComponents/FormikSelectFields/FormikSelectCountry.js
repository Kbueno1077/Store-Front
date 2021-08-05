import React from "react";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { useField, useFormikContext } from "formik";

function FormikSelectCountry({ name, options, defaultValue, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullwidth: "true",

    variant: "outlined",
    //margin: "dense",
    autowidth: "true",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField
      {...configSelect}
      defaultValue={defaultValue}
      autoComplete="true"
    >
      {options.map((option, index) => (
        <MenuItem value={option} key={index}>
          <a style={{ marginRight: "5px" }}>{option.name}</a>
          <a style={{ color: "#868481", margin: "0 0 0 auto" }}>
            {option.dial_code}
          </a>
        </MenuItem>
      ))}
    </TextField>
  );
}

export default FormikSelectCountry;
