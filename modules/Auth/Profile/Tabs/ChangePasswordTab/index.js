import React from "react";
import { Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "@/common/FormikComponents/FormikTextField";
import FormikButton from "@/common/FormikComponents/FormikButton";
import { passwordRegExp } from "@/common/Validations/regex";
import {
  TextFieldWrapper,
  ValidationsWrapper,
  Validation,
  StyledCheckIcon,
  StyledClearIcon,
  ButtonWrapper,
  LoadingIcon,
} from "./ChElements";

function index() {
  const INITIAL_FORM_STATE = {
    password: "",
    new_password: "",
    confirm_password: "",
  };
  const FORM_VALIDATION = Yup.object().shape({
    password: Yup.string().required("Es requerido."),
    new_password: Yup.string()
      .matches(
        passwordRegExp,
        "Mayor de 7 caracteres, al menos: una mayúscula, una minúscula, un número y un caracter especial"
      )
      .required("Es requerido."),
    confirm_password: Yup.string()
      .required("Es requerido.")
      .oneOf(
        [Yup.ref("new_password"), null],
        "Las contraseñas deben coincidir"
      ),
  });

  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 5000);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <TextFieldWrapper>
              <FormikTextField
                required
                name="password"
                label="Contraseña actual"
                type="password"
                size="small"
              />
            </TextFieldWrapper>

            <TextFieldWrapper>
              <FormikTextField
                required
                name="new_password"
                label="Nueva contraseña"
                type="password"
                size="small"
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <FormikTextField
                required
                name="confirm_password"
                label="Repetir contraseña"
                type="password"
                size="small"
              />
            </TextFieldWrapper>

            <ValidationsWrapper>
              <Validation>
                {values.new_password.length > 7 ? (
                  <StyledCheckIcon />
                ) : (
                  <StyledClearIcon />
                )}
                <Typography>Mínimo de 8 caracteres</Typography>
              </Validation>
              <Validation>
                {values.new_password.match(/[A-Z]/) ? (
                  <StyledCheckIcon />
                ) : (
                  <StyledClearIcon />
                )}
                <Typography>Contiene mayúsculas</Typography>
              </Validation>
              <Validation>
                {values.new_password.match(/[a-z]/) ? (
                  <StyledCheckIcon />
                ) : (
                  <StyledClearIcon />
                )}
                <Typography>Contiene minúsculas</Typography>
              </Validation>
              <Validation>
                {values.new_password.match(
                  /[$@\\$!%*?&\(\)+~|{}':`;\].<>\[]/
                ) ? (
                  <StyledCheckIcon />
                ) : (
                  <StyledClearIcon />
                )}
                <Typography>Contiene caracter especial</Typography>
              </Validation>
            </ValidationsWrapper>

            <ButtonWrapper>
              <FormikButton
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
                isSubmitting={isSubmitting}
              >
                {isSubmitting ? <LoadingIcon /> : "Aceptar Cambios"}
              </FormikButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default index;
