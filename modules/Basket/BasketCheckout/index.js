import React from "react";
import CurrencyFormat from "react-currency-format";
import { CheckoutCard, StyledButton } from "./BasketCheckoutElements";
import Link from "next/link";

function BasketCheckout() {
  return (
    <CheckoutCard>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (4 items):
              <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={2000}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" USD "}
      />

      <Link passHref href="/checkout">
        <a>
          <StyledButton fullWidth color="primary" variant="contained">
            Realizar Compra
          </StyledButton>
        </a>
      </Link>
    </CheckoutCard>
  );
}

export default BasketCheckout;
