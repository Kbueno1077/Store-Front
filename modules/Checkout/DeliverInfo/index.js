import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import StyledTextField from "@/common/StyledTextField";
import Slide from "@material-ui/core/Slide";
import Image from "next/image";
import {
  DeliverWrapper,
  CardWrapper,
  StyledCard,
  StyledCardActionArea,
  CardActionWrapper,
  StyledEditIcon,
  StyledAccountIcon,
  ImageWrapper,
  PaperWrapper,
  StyledPaper,
  ButtonWrapper,
  StyledButton,
  useStyles,
} from "./DeliverInfoElements";

function index(props) {
  const classes = useStyles();
  const [showInputs, setShowInputs] = useState(false);

  return (
    <DeliverWrapper>
      {!showInputs ? (
        <CardWrapper>
          <StyledCard>
            <StyledCardActionArea onClick={props.handleNext}>
              <CardActionWrapper>
                <ImageWrapper>
                  <Image
                    src={"/static/images/personal_information.svg"}
                    objectFit="contain"
                    quality={100}
                    height={90}
                    width={160}
                  />
                </ImageWrapper>
                <Typography>Información de la cuenta</Typography>
              </CardActionWrapper>
            </StyledCardActionArea>
          </StyledCard>
          <StyledCard>
            <StyledCardActionArea
              onClick={() => {
                setShowInputs(true);
              }}
            >
              <CardActionWrapper>
                <ImageWrapper>
                  <Image
                    src={"/static/images/datain.svg"}
                    objectFit="contain"
                    quality={100}
                    height={90}
                    width={160}
                  />
                </ImageWrapper>
                <Typography>Proporcionar Información</Typography>
              </CardActionWrapper>
            </StyledCardActionArea>
          </StyledCard>
        </CardWrapper>
      ) : (
        <Slide direction="up" in={showInputs} mountOnEnter unmountOnExit>
          <PaperWrapper>
            <StyledPaper elevation={1}>
              <Typography variant="h6" align="center" gutterBottom>
                Información de la cuenta
              </Typography>
              <div>
                <StyledTextField
                  required
                  size="small"
                  name="ci"
                  label="Carnet de identidad"
                  id="ci"
                  cssType=""
                />
              </div>
              <div>
                <StyledTextField
                  required
                  size="small"
                  name="address"
                  label="Dirección"
                  id="address"
                  cssType=""
                />
              </div>
              <StyledTextField
                required
                size="small"
                name="phone"
                label="Telefono"
                id="phone"
                type="number"
                cssType={classes.input_number}
              />
              <ButtonWrapper>
                <StyledButton
                  onClick={props.handleNext}
                  fullWidth
                  color="primary"
                  variant="contained"
                >
                  Continuar
                </StyledButton>
                <StyledButton
                  onClick={() => {
                    setShowInputs(false);
                  }}
                  fullWidth
                  color="secondary"
                  variant="outlined"
                >
                  Cancelar
                </StyledButton>
              </ButtonWrapper>
            </StyledPaper>
          </PaperWrapper>
        </Slide>
      )}
    </DeliverWrapper>
  );
}

export default index;
