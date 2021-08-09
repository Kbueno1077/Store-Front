import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import DeliverInfo from "./DeliverInfo";
import PayMethod from "./PayMethod";
import Report from "./Report";
import Finished from "./Finished";
import Error from "./Error";
import Aside from "./Aside";
import DialogAside from "./Aside/DialogAside";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  CheckoutWrapper,
  StepWrapper,
  InfoIconWrapper,
  FlexWrapper,
  AsideWrapper,
  SettingsWrapper,
} from "./CheckoutElements";

const muiTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$active": {
          color: "#fea573",
        },
        "&$completed": {
          color: "#fea573",
        },
      },
    },
  },
});

export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const steps = getSteps();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <CheckoutWrapper>
      <FlexWrapper>
        <SettingsWrapper>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <div>
              <Finished />
            </div>
          ) : (
            <StepWrapper>
              {activeStep >= steps.length - 1 ? (
                ""
              ) : (
                <InfoIconWrapper>
                  <IconButton
                    onClick={handleClickOpen}
                    aria-label="info"
                    size="small"
                  >
                    <InfoIcon />
                  </IconButton>
                </InfoIconWrapper>
              )}
              <div>
                {getStepContent(activeStep, handleNext)}
                <div style={{ textAlign: "center", margin: "20px" }}>
                  <Button
                    size="large"
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Ir Atrás
                  </Button>
                </div>
              </div>
            </StepWrapper>
          )}
        </SettingsWrapper>
        {activeStep >= steps.length - 1 ? (
          ""
        ) : (
          <AsideWrapper>
            <Aside activeStep={activeStep} />
            <DialogAside
              activeStep={activeStep}
              handleClose={handleClose}
              open={open}
            />
          </AsideWrapper>
        )}
      </FlexWrapper>
    </CheckoutWrapper>
  );
}

function getSteps() {
  return [
    "Obtención de datos personales",
    "Método de pago",
    "Información de compra",
  ];
}

function getStepContent(stepIndex, handleNext) {
  switch (stepIndex) {
    case 0:
      return <DeliverInfo handleNext={handleNext} />;
    case 1:
      return <PayMethod handleNext={handleNext} />;
    case 2:
      return <Report handleNext={handleNext} />;
    default:
      return <Error />;
  }
}
