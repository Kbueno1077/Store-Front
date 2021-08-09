import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "@/common/FormikComponents/FormikTextField";
import FormikButton from "@/common/FormikComponents/FormikButton";
import {
  phoneRegExp,
  emailRegExp,
  alphanumericRegExp,
} from "@/common/Validations/regex";
import country_codes from "@/common/Validations/country_codes.json";
import {
  TextFieldWrapper,
  SFormikSelectCountry,
  ButtonWrapper,
  StyledButton,
  StyledVerifiedIcon,
  StyledNonVerifiedIcon,
  FlexWrapper,
  LoadingIcon,
} from "./InfoTabElements";

import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  const is_email_v = true;
  const is_phone_v = false;

  const INITIAL_FORM_STATE = {
    username: "kbueno1077@gmail.com",
    phone_number: "",
    country: country_codes[54],
    email: "",
    address: "",
    ci: "",
  };

  const FORM_VALIDATION = Yup.object().shape(
    {
      country: Yup.object().required("Es requerido"),
      address: Yup.string().required("Es requerido"),
      ci: Yup.string().required("Es requerido"),
      email: Yup.string()
        .ensure()
        .when("phone_number", {
          is: "",
          then: Yup.string()
            .required("Email o Telefono requerido")
            .matches(emailRegExp, "Dirección email inválida"),
          otherwise: Yup.string().matches(
            emailRegExp,
            "Dirección email inválida"
          ),
        }),
      phone_number: Yup.string()
        .ensure()
        .when("email", {
          is: "",
          then: Yup.string()
            .required("Email o Telefono requerido")
            .matches(phoneRegExp, "Número de telefono inválido"),
          otherwise: Yup.string().matches(
            phoneRegExp,
            "Número de telefono inválido"
          ),
        }),
    },
    [["email", "phone_number"]]
  );

  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(
              JSON.stringify({ ...values, is_email_v, is_phone_v }, null, 2)
            );
            actions.setSubmitting(false);
          }, 5000);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <TextFieldWrapper>
              <FormikTextField
                required
                label="Usuario"
                size="small"
                name="username"
                disabled
              />
            </TextFieldWrapper>

            <TextFieldWrapper>
              <FormikTextField
                required
                name="email"
                label="Correo"
                size="small"
              />
            </TextFieldWrapper>

            <FlexWrapper>
              <SFormikSelectCountry
                required
                fullWidth
                label="Pais"
                name="country"
                size="small"
                options={country_codes}
              />

              <TextFieldWrapper>
                <FormikTextField
                  required
                  name="phone_number"
                  label="Telefono"
                  size="small"
                />
              </TextFieldWrapper>
            </FlexWrapper>

            <TextFieldWrapper>
              <FormikTextField
                required
                name="address"
                label="Dirección de Entrega"
                size="small"
              />
            </TextFieldWrapper>

            <TextFieldWrapper>
              <FormikTextField
                required
                name="ci"
                label="Carnet de Identidad"
                size="small"
              />
            </TextFieldWrapper>

            <FlexWrapper>
              <StyledButton
                disabled={is_email_v}
                fullWidth
                variant={is_email_v ? "text" : "outlined"}
                color={is_email_v ? "default" : "secondary"}
                onClick={() =>
                  router.push({
                    pathname: "/verify",
                    query: { verify_address: values.email },
                  })
                }
                startIcon={
                  is_email_v ? (
                    <StyledVerifiedIcon />
                  ) : (
                    <StyledNonVerifiedIcon />
                  )
                }
              >
                {is_email_v ? "Correo verificado" : "Verificar correo"}
              </StyledButton>

              <StyledButton
                disabled={is_phone_v}
                variant={is_phone_v ? "text" : "outlined"}
                color={is_phone_v ? "default" : "secondary"}
                fullWidth
                onClick={() =>
                  router.push({
                    pathname: "/verify",
                    query: { verify_address: values.phone_number },
                  })
                }
                startIcon={
                  is_phone_v ? (
                    <StyledVerifiedIcon />
                  ) : (
                    <StyledNonVerifiedIcon />
                  )
                }
              >
                {is_phone_v ? "Telefono verificado" : "Verificar telefono"}
              </StyledButton>
            </FlexWrapper>

            <ButtonWrapper>
              <FormikButton
                fullWidth
                variant="contained"
                type="submit"
                color="primary"
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
