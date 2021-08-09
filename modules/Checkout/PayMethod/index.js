import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import CreditCard from "./CreditCard";
import CryptoCurrency from "./CryptoCurrency";
import Image from "next/image";
import {
  DeliverWrapper,
  CardWrapper,
  StyledCard,
  ImageWrapper,
  StyledCardActionArea,
  CardActionWrapper,
} from "./PayElements";

function index({ handleNext }) {
  const [method, setMethod] = useState("");
  return (
    <DeliverWrapper handleNext={handleNext}>
      {method === "Credit" ? (
        <CreditCard handleNext={handleNext} />
      ) : method === "Crypto" ? (
        <CryptoCurrency handleNext={handleNext} />
      ) : (
        ""
      )}
      <CardWrapper>
        <StyledCard>
          <StyledCardActionArea onClick={() => setMethod("Credit")}>
            <CardActionWrapper>
              <ImageWrapper>
                <Image
                  src={"/static/images/Credit_card_2.svg"}
                  objectFit="cover"
                  quality={100}
                  height={90}
                  width={100}
                />
              </ImageWrapper>
              <Typography>Tarjeta de Credito</Typography>
            </CardActionWrapper>
          </StyledCardActionArea>
        </StyledCard>
        <StyledCard>
          <StyledCardActionArea onClick={() => setMethod("Crypto")}>
            <CardActionWrapper>
              <div>
                <Image
                  src={"/static/images/Bitcoin.svg"}
                  objectFit="contain"
                  quality={100}
                  height={102}
                  width={160}
                />
              </div>
              <Typography>Pagar con Criptomonedas</Typography>
            </CardActionWrapper>
          </StyledCardActionArea>
        </StyledCard>
      </CardWrapper>
    </DeliverWrapper>
  );
}

export default index;
