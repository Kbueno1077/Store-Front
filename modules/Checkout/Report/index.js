import React from "react";
import Image from "next/image";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CurrencyFormat from "react-currency-format";

import {
  Wrapper,
  PaperWrapper,
  PersonalDataWrapper,
  SectionTitle,
  IndividualDataWrapper,
  Heading,
  InfoKey,
  InfoValue,
  HashValue,
  ImageWrapper,
  AccordionWrapper,
  ProductWrapper,
  Description,
  Price,
  ButtonWrapper,
  StyledButton,
} from "./ReportElements";

function index(props) {
  return (
    <Wrapper>
      <PaperWrapper elevation={1}>
        <Heading>Resumen del pedido</Heading>
        <PersonalDataWrapper>
          <SectionTitle>Datos Personales</SectionTitle>
          <IndividualDataWrapper>
            <InfoKey>Nombre: </InfoKey>
            <InfoValue>Kevin Bueno Estevez</InfoValue>
          </IndividualDataWrapper>

          <IndividualDataWrapper>
            <InfoKey>Dirección de entrega: </InfoKey>
            <InfoValue>Marti 229 e/ Virtudes y Gonzales Dias</InfoValue>
          </IndividualDataWrapper>

          <IndividualDataWrapper>
            <InfoKey>CI: </InfoKey>
            <InfoValue>97022310769</InfoValue>
          </IndividualDataWrapper>
        </PersonalDataWrapper>

        <PersonalDataWrapper>
          <SectionTitle>
            Datos de Tarjeta
            <ImageWrapper>
              <Image
                src={"/static/images/visa.png"}
                objectFit="contain"
                quality={100}
                height={40}
                width={40}
              ></Image>
            </ImageWrapper>
          </SectionTitle>
          <IndividualDataWrapper>
            <InfoKey>Nombre en Tarjeta: </InfoKey>
            <InfoValue>Kevin Bueno Estevez</InfoValue>
          </IndividualDataWrapper>

          <IndividualDataWrapper>
            <InfoKey>Número de la Tarjeta </InfoKey>
            <InfoValue>•••••••• 2147</InfoValue>
          </IndividualDataWrapper>
          <IndividualDataWrapper>
            <InfoKey>Fecha de expiración </InfoKey>
            <InfoValue>12/22</InfoValue>
          </IndividualDataWrapper>
          <IndividualDataWrapper>
            <InfoKey>CVV </InfoKey>
            <InfoValue>••••</InfoValue>
          </IndividualDataWrapper>
          <br />
          <IndividualDataWrapper>
            <InfoKey>Pais </InfoKey>
            <InfoValue>EE.UU</InfoValue>
          </IndividualDataWrapper>
          <IndividualDataWrapper>
            <InfoKey>Código Postal </InfoKey>
            <InfoValue>233331</InfoValue>
          </IndividualDataWrapper>
          <IndividualDataWrapper>
            <InfoKey>Calle </InfoKey>
            <InfoValue>Main Street</InfoValue>
          </IndividualDataWrapper>
          <IndividualDataWrapper>
            <InfoKey>Ciudad </InfoKey>
            <InfoValue>Miami</InfoValue>
          </IndividualDataWrapper>
        </PersonalDataWrapper>

        <PersonalDataWrapper>
          <SectionTitle>
            Pago por Cryptomoneda
            <ImageWrapper>
              <Image
                src={"/static/images/ustd.png"}
                objectFit="contain"
                quality={100}
                height={40}
                width={40}
              ></Image>
            </ImageWrapper>
          </SectionTitle>
          <IndividualDataWrapper>
            <InfoKey>Cryptomoneda: </InfoKey>
            <InfoValue>USTD</InfoValue>
          </IndividualDataWrapper>

          <IndividualDataWrapper>
            <InfoKey>Billetera electrónica: </InfoKey>
            <HashValue>3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy</HashValue>
          </IndividualDataWrapper>
        </PersonalDataWrapper>

        <PersonalDataWrapper>
          <SectionTitle>Orden</SectionTitle>
          <IndividualDataWrapper>
            <InfoKey>Cantidad de Articulos: </InfoKey>
            <InfoValue>3</InfoValue>
          </IndividualDataWrapper>

          <IndividualDataWrapper>
            <InfoKey>Subtotal: </InfoKey>
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <InfoValue>
                    <strong>{`${value}`}</strong>
                  </InfoValue>
                </>
              )}
              decimalScale={2}
              value={1200}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" USD "}
            />
          </IndividualDataWrapper>

          <IndividualDataWrapper>
            <InfoKey>Envio: </InfoKey>
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <InfoValue>
                    <strong>{`${value}`}</strong>
                  </InfoValue>
                </>
              )}
              decimalScale={2}
              value={100}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" USD "}
            />
          </IndividualDataWrapper>

          <IndividualDataWrapper>
            <InfoKey>Total: </InfoKey>
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <InfoValue>
                    <strong>{`${value}`}</strong>
                  </InfoValue>
                </>
              )}
              decimalScale={2}
              value={1300}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" USD "}
            />
          </IndividualDataWrapper>
        </PersonalDataWrapper>
      </PaperWrapper>

      <AccordionWrapper>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <InfoKey>Productos</InfoKey>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <ProductWrapper>
                <ImageWrapper>
                  <Image
                    src={"/static/images/og.png"}
                    objectFit="contain"
                    height={100}
                    width={100}
                  ></Image>
                </ImageWrapper>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Description>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <Price>
                        <strong>{`${value}`}</strong>
                      </Price>
                    </>
                  )}
                  decimalScale={2}
                  value={2000}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={" USD "}
                />
                <Price>
                  <strong>Cant: </strong>
                </Price>
                <Price>
                  <strong>7</strong>
                </Price>
              </ProductWrapper>

              <ProductWrapper>
                <ImageWrapper>
                  <Image
                    src={"/static/images/og.png"}
                    objectFit="contain"
                    height={100}
                    width={100}
                  ></Image>
                </ImageWrapper>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Description>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <Price>
                        <strong>{`${value}`}</strong>
                      </Price>
                    </>
                  )}
                  decimalScale={2}
                  value={2000}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={" USD "}
                />
                <Price>
                  <strong>Cant: </strong>
                </Price>
                <Price>
                  <strong>28</strong>
                </Price>
              </ProductWrapper>

              <ProductWrapper>
                <ImageWrapper>
                  <Image
                    src={"/static/images/og.png"}
                    objectFit="contain"
                    height={100}
                    width={100}
                  ></Image>
                </ImageWrapper>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Description>

                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <Price>
                        <strong>{`${value}`}</strong>
                      </Price>
                    </>
                  )}
                  decimalScale={2}
                  value={2000}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={" USD "}
                />
                <Price>
                  <strong>Cant: </strong>
                </Price>
                <Price>
                  <strong>1</strong>
                </Price>
              </ProductWrapper>
            </div>
          </AccordionDetails>
        </Accordion>
      </AccordionWrapper>
      <ButtonWrapper>
        <StyledButton
          onClick={props.handleNext}
          fullWidth
          color="primary"
          variant="contained"
        >
          Realizar Pedido
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default index;
