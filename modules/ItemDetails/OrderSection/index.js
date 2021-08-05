import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import CurrencyFormat from "react-currency-format";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import {
  PaperWrapper,
  OrderWrapper,
  FirstRow,
  BasketCard,
  Span,
  RatingWrapper,
  SendBasketWrapper,
  ButtonWrapper,
  BasketButton,
  BasketIcon,
} from "./OrderSectionElements";

function InfoSection() {
  const [count, setCount] = useState(1);

  return (
    <PaperWrapper elevation={3}>
      <OrderWrapper>
        <FirstRow>
          <BasketCard>
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <Typography
                    style={{
                      color: "rgba(200, 50,50,0.7)",
                      fontSize: "25px",
                    }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >{`${value}`}</Typography>
                </>
              )}
              decimalScale={2}
              value={2000}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"USD "}
            />
            <Span>Disponibilidad: 1200 en stock.</Span>
          </BasketCard>

          <RatingWrapper>
            <Rating name="read-only" value={3} readOnly precision={0.5} />
            <Span>Basado en: 4000 Valoraciones</Span>
          </RatingWrapper>
        </FirstRow>

        <SendBasketWrapper>
          <div>
            <h4>Cantidad: </h4>
            <ButtonWrapper>
              <IconButton
                onClick={() =>
                  setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
                }
                aria-label="delete"
              >
                <RemoveIcon />
              </IconButton>
              <span>{count}</span>
              <IconButton
                onClick={() => setCount((prevCount) => prevCount + 1)}
                aria-label="add"
              >
                <AddIcon />
              </IconButton>
            </ButtonWrapper>
          </div>
          <BasketButton
            size="small"
            variant="contained"
            endIcon={<BasketIcon />}
          >
            Añadir  
          </BasketButton>
        </SendBasketWrapper>
      </OrderWrapper>
    </PaperWrapper>
  );
}

export default InfoSection;
