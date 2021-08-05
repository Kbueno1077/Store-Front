import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Image from "next/image";
function index({
  required,
  id,
  label,
  labelId,
  onChange,
  value,
  error,
  helperText,
  cssType,
  autoWidth,
  autoFocus,
  items,
  size,
  hasimg,
}) {
  return (
    <FormControl style={{ width: "100%" }} variant="outlined" size={size}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <CssSelectField
        require={required}
        labelId={labelId}
        id={id}
        value={value}
        onChange={onChange}
        label={label}
        autoWidth={autoWidth}
        autoFocus={autoFocus}
      >
        {hasimg
          ? items.map((item) => (
              <MenuItem value={item}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ paddingTop: "5px" }}>
                    <Image
                      src={item.src}
                      height={18}
                      width={18}
                      objectFit="contain"
                    />
                  </div>
                  <a style={{ paddingLeft: "10px" }}>{item.value}</a>
                </div>
              </MenuItem>
            ))
          : items.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
      </CssSelectField>
    </FormControl>
  );
}

export default index;

export const CssSelectField = withStyles({
  root: {
    minWidth: 60,

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
})(Select);
