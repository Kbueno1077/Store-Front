import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@material-ui/core";

function index({ children, isSubmitting, ...otherProps }) {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...otherProps,
    onClick: handleSubmit,
  };

  return (
    <Button {...configButton} disabled={isSubmitting}>
      {children}
    </Button>
  );
}

export default index;
