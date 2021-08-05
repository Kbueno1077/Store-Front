import React from "react";
import Image from "next/image";
import {
  StepsInfoWrapper,
  TitleWrapper,
  Heading,
  StepsInfo,
  StepTitleWrapper,
  StepTitle,
  StyledCheckIcon,
  InputWrapper,
  DetailsWrapper,
  InputKey,
  InputValue,
  ImgInputWrapper,
  CreditCardWrapper,
  CreditCardForm,
  LowerCardWrapper,
  NumberCardStripe,
  DateStripe,
  CVVStripe,
} from "./AsideElements";

function index({ activeStep }) {
  return (
    <>
      <StepsInfoWrapper>
        <TitleWrapper>
          <Heading variant="h5">Estado del proceso.</Heading>
        </TitleWrapper>

        {activeStep > 0 ? (
          <StepsInfo>
            <StepTitleWrapper>
              <StepTitle gutterBottom>{Info()[0].title}</StepTitle>
              <StyledCheckIcon />
            </StepTitleWrapper>

            <DetailsWrapper>
              <InputWrapper>
                <InputKey>Dirección: </InputKey>
                <InputValue> Marti 229 e/ Virtudes y Gnzales Dias </InputValue>
              </InputWrapper>
              <InputWrapper>
                <InputKey>Ci: </InputKey>
                <InputValue> 97022310769 </InputValue>
              </InputWrapper>
              <InputWrapper>
                <InputKey>Telefono: </InputKey>
                <InputValue> 53562795 </InputValue>
              </InputWrapper>
            </DetailsWrapper>
          </StepsInfo>
        ) : (
          ""
        )}
        {activeStep > 1 ? (
          <StepsInfo>
            <StepTitleWrapper>
              <StepTitle gutterBottom>{Info()[1].title}</StepTitle>
              <StyledCheckIcon />
            </StepTitleWrapper>

            <DetailsWrapper>
              <InputWrapper>
                <InputKey>Nombre: </InputKey>
                <InputValue> Kevin Bueno Estevez </InputValue>
              </InputWrapper>
              <InputWrapper>
                <InputKey>Dirección: </InputKey>
                <InputValue> Marti 229 e/ Virtudes y Gnzales Dias </InputValue>
              </InputWrapper>

              <CreditCardWrapper>
                <CreditCardForm elevation={1}>
                  <NumberCardStripe>
                    <div>
                      <StepTitle>97012883749</StepTitle>
                    </div>
                  </NumberCardStripe>

                  <LowerCardWrapper>
                    <DateStripe>
                      <div>
                        <StepTitle>Junio 1997</StepTitle>
                      </div>
                    </DateStripe>

                    <CVVStripe last={1}>
                      <div>
                        <StepTitle>CVV</StepTitle>
                      </div>
                    </CVVStripe>
                  </LowerCardWrapper>
                </CreditCardForm>
              </CreditCardWrapper>

              <InputWrapper>
                <InputKey>Cripto moneda de pago: </InputKey>

                <ImgInputWrapper>
                  <Image
                    quality={100}
                    objectFit="contain"
                    src={"/static/images/ustd.png"}
                    height={18}
                    width={18}
                  />
                  <InputValue> USTD</InputValue>
                </ImgInputWrapper>
              </InputWrapper>
            </DetailsWrapper>
          </StepsInfo>
        ) : (
          ""
        )}

        <StepsInfo>
          <StepTitle gutterBottom>{Info()[activeStep].title}</StepTitle>
          <DetailsWrapper>
            <InputKey>{Info()[activeStep].text}</InputKey>
          </DetailsWrapper>
        </StepsInfo>
      </StepsInfoWrapper>
    </>
  );
}

export default index;

function Info() {
  return [
    {
      title: "Paso 1: ",
      text:
        " Seleccione la manera de obtencion de los datos necesarios para la" +
        " entrega de los productos, mediante los datos del usuario ya" +
        " autentificado, o proporcionados en este menú",
    },
    {
      title: "Paso 2: ",
      text:
        " Seleccione la manera de pago, ya sea mediante tarjeta de creditos" +
        " o criptomonedas, llene los respectivos campos para continuar.",
    },
    {
      title: "Paso 3: ",
      text:
        " Verifique que toda la información fue correctamente introducida" + "",
    },
  ];
}
