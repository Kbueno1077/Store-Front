import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CurrencyFormat from "react-currency-format";
import Checkbox from "@material-ui/core/Checkbox";
import Image from "next/image";
import {
  BasketProductWrapper,
  LeftSection,
  CheckboxWrapper,
  ImgWrapper,
  ProductInfoWrapper,
  ProductHeader,
  Title,
  Description,
  PriceWraper,
  Price,
  StyledRating,
} from "./BasketItemElements";
import { mutate } from "swr";

function BasketProduct(props) {
  const [isChecked, setIsChecket] = useState(true);

  async function handleDownToBasket(product) {
    fetch(`/api/hello/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(product),
    })
      .then(function (res) {
        console.log(res);
        mutate("/api/hello");
      })
      .catch(function (res) {
        console.log(res);
      });
  }

  return (
    <BasketProductWrapper selectedcolor={isChecked ? 1 : 0}>
      <LeftSection>
        <CheckboxWrapper>
          <Checkbox
            checked={isChecked}
            color="primary"
            onChange={() => {
              setIsChecket(!isChecked);
            }}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </CheckboxWrapper>
        <ImgWrapper
          onClick={() => {
            setIsChecket(!isChecked);
          }}
        >
          <Image
            height={250}
            width={250}
            objectFit="contain"
            src={"/static/images/IpadAir.jpg"}
            alt="Basket Product"
          />
        </ImgWrapper>
      </LeftSection>

      <ProductInfoWrapper selectedcolor={isChecked ? 1 : 0}>
        <ProductHeader>
          {" "}
          <Title>Title</Title>
        </ProductHeader>

        <Description>
          {" "}
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica Lizards are a
          widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Description>
        <PriceWraper>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <Price>
                  <strong>{`Precio: ${value}`}</strong>
                </Price>
              </>
            )}
            decimalScale={2}
            value={props.value}
            displayType={"text"}
            thousandSeparator={true}
            prefix={" US$ "}
          />
          <Price>
            <strong>{`Cantidad: ${props.count}`}</strong>
          </Price>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <Price>
                  <strong>{`Subtotal: ${value}`}</strong>
                </Price>
              </>
            )}
            decimalScale={2}
            value={props.value * props.count}
            displayType={"text"}
            thousandSeparator={true}
            prefix={" US$ "}
          />
        </PriceWraper>
        <StyledRating name="read-only" value={2} readOnly />

        <Button
          onClick={() => handleDownToBasket({ id: props.id })}
          color="primary"
          variant="outlined"
        >
          Sacar del Carrito
        </Button>
      </ProductInfoWrapper>
    </BasketProductWrapper>
  );
}

export default BasketProduct;
