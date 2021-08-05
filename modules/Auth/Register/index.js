import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { signUp } from "./utils";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "@/common/FormikComponents/FormikTextField";
import FormikSelectCountry from "@/common/FormikComponents/FormikSelectFields/FormikSelectCountry";
import FormikButton from "@/common/FormikComponents/FormikButton";
import {
  phoneRegExp,
  emailRegExp,
  passwordRegExp,
  email_phoneRegexExp,
} from "@/common/Validations/regex";
import country_codes from "@/common/Validations/country_codes.json";
import { useStyles, LoadingIcon } from "./RegisterElements";

function Register() {
  const router = useRouter();
  const classes = useStyles();

  const INITIAL_FORM_STATE = {
    username: "",
    password: "",
    confirm_password: "",
    country: country_codes[54],
    phone_number: "",
    email: "",
  };

  const FORM_VALIDATION = Yup.object().shape(
    {
      username: Yup.string()
        .matches(email_phoneRegexExp, "Debe ser un email o un telefono validos")
        .required("Es requerido."),
      password: Yup.string()
        .matches(
          passwordRegExp,
          "Mayor de 7 caracteres, al menos: una mayúscula, una minúscula, un número y un caracter especial"
        )
        .required("Es requerido."),
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
      country: Yup.object().required("Es requerido"),
      confirm_password: Yup.string()
        .required("Es requerido.")
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir"),
    },
    [["email", "phone_number"]]
  );

  return (
    <Grid container component="main" className={classes.root}>
      <div className={classes.imageClass}>
        <Image
          src={"/static/images/Account.svg"}
          objectFit="cover"
          quality={100}
          height={250}
          width={470}
        />
      </div>

      <Grid container className={classes.paper}>
        <h2 className={classes.title}>Crear una cuenta</h2>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              router.push({
                pathname: "/verify",
                query: { verify_address: values.username },
              });
            }, 5000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container className={classes.texts}>
                <div className={classes.inputWrapper}>
                  <FormikTextField
                    required
                    label="Usuario"
                    size="small"
                    name="username"
                  />
                </div>

                <div className={classes.inputWrapper}>
                  <FormikTextField label="Email" name="email" size="small" />
                </div>

                <Grid className={classes.flexGrid}>
                  <FormikSelectCountry
                    required
                    label="Pais"
                    name="country"
                    size="small"
                    options={country_codes}
                    className={classes.select_input}
                  />

                  <div className={classes.phone_input}>
                    <FormikTextField
                      label="Telefono"
                      name="phone_number"
                      size="small"
                    />
                  </div>
                </Grid>

                <div className={classes.inputWrapper}>
                  <FormikTextField
                    required
                    label="Contraseña"
                    name="password"
                    size="small"
                    type="password"
                  />
                </div>

                <FormikTextField
                  required
                  label="Repetir contraseña"
                  name="confirm_password"
                  size="small"
                  type="password"
                />
              </Grid>

              <Grid container className={classes.actions}>
                <FormikButton
                  className={classes.submit}
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                  isSubmitting={isSubmitting}
                >
                  {isSubmitting ? <LoadingIcon /> : "Registrarse"}
                </FormikButton>

                <Grid className={classes.linkswrapper}>
                  <Link href="/login" passHref>
                    <a>
                      <Button color="primary">Ya tiene una cuenta?</Button>
                    </a>
                  </Link>
                  <Link href="/" passHref>
                    <a>
                      <Button color="primary">Ir Atrás</Button>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default Register;
