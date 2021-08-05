import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "@/common/FormikComponents/FormikTextField";
import FormikButton from "@/common/FormikComponents/FormikButton";
import Button from "@material-ui/core/Button";
import { useStyles, LoadingIcon } from "./VerifyElements";
import { useRouter } from "next/router";

function index() {
  const classes = useStyles();
  const router = useRouter();
  const { verify_address } = router.query;

  const INITIAL_FORM_STATE = {
    verify_address: verify_address,
    regcode: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    regcode: Yup.string().required("Es requerido."),
  });

  return (
    <Grid container component="main" className={classes.root}>
      <div className={classes.imageClass}>
        <Image
          src={"/static/images/authentication.svg"}
          objectFit="cover"
          quality={100}
          height={330}
          width={460}
        />
      </div>
      <Grid container className={classes.paper}>
        <h2 className={classes.title}>Se envió un codigo a {verify_address}</h2>

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
              <Grid container className={classes.texts}>
                <FormikTextField
                  required
                  name="regcode"
                  label="Codigo de registro"
                />
                <FormikButton
                  className={classes.submit}
                  fullWidth
                  color="primary"
                  variant="contained"
                  type="submit"
                  isSubmitting={isSubmitting}
                >
                  {isSubmitting ? <LoadingIcon /> : "Verificar"}
                </FormikButton>
                <Grid className={classes.onlylink}>
                  <Link href="/login" passHref>
                    <a>
                      <Button color="primary">Enviar codigo nuevamente</Button>
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

export default index;
