import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "@/common/FormikComponents/FormikTextField";
import FormikButton from "@/common/FormikComponents/FormikButton";
import { useStyles, LoadingIcon } from "./LoginElements";
import { email_phoneRegexExp } from "@/common/Validations/regex";
import CircularProgress from "@material-ui/core/CircularProgress";

function Login() {
  const classes = useStyles();

  const INITIAL_FORM_STATE = {
    username: "",
    password: "",
  };
  const FORM_VALIDATION = Yup.object().shape({
    username: Yup.string()
      .matches(email_phoneRegexExp, "Debe ser un email o un telefono validos")
      .required("Es requerido."),
    password: Yup.string().required("Es requerido."),
  });

  return (
    <Grid container component="main" className={classes.root}>
      <div className={classes.imageClass}>
        <Image
          src={"/static/images/Login.svg"}
          objectFit="cover"
          quality={100}
          height={300}
          width={460}
        />
      </div>

      <Grid container className={classes.paper}>
        <h2 className={classes.title}>Autentificación</h2>
        <Grid container className={classes.texts}>
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
            {({ isSubmitting }) => (
              <Form>
                <div className={classes.inputwrapper}>
                  <FormikTextField
                    required
                    label="Usuario"
                    name="username"
                    size="small"
                  />
                </div>

                <FormikTextField
                  required
                  name="password"
                  label="Contraseña"
                  type="password"
                  size="small"
                />

                <FormikButton
                  className={classes.submit}
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                  isSubmitting={isSubmitting}
                >
                  {isSubmitting ? <LoadingIcon /> : "Iniciar Sesión"}
                </FormikButton>
              </Form>
            )}
          </Formik>
        </Grid>

        <Grid className={classes.linkswrapper}>
          <Link href="/register" passHref>
            <a>
              <Button color="primary">Registrarse</Button>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <Button color="primary">Ir Atrás</Button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
