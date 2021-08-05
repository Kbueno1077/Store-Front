import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import Image from "next/image";

import {
  StyledCard,
  StyledCardActionArea,
  StyledCardImg,
  ImgWrapper,
  ContentWrapper,
  StyledCardContent,
  StyledTypo,
  TruncateText,
  ActionWrapper,
  CSSBadge,
  BasketIcon,
  BasketButton,
} from "./ProductCardElements";
import { mutate } from "swr";
import { useSelector } from "react-redux";

function ProductCard(props) {
  const state = useSelector((state) => state.view.displayRows);

  async function handleUpToBasket(e, product) {
    e.preventDefault();
    fetch("/api/hello", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
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
    <Link as={`/product/${props.id}`} href="/product/[id]" passHref>
      <a>
        <StyledCard isrow={state ? 0 : 1}>
          <StyledCardImg isrow={state ? 0 : 1}>
            <ImgWrapper isrow={state ? 0 : 1}>
              <Image
                src={"/static/images/Macbook Air.jpg"}
                alt="Contemplative Reptile"
                objectFit="contain"
                height={140}
                width={300}
                priority
              />
            </ImgWrapper>
          </StyledCardImg>

          <ContentWrapper>
            <StyledCardContent>
              <StyledTypo
                isrow={state ? 0 : 1}
                gutterBottom
                variant="h6"
                component="h2"
              >
                Lizard
              </StyledTypo>
              <Tooltip
                title="  Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica"
              >
                <TruncateText isrow={state ? 0 : 1}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </TruncateText>
              </Tooltip>
            </StyledCardContent>

            <ActionWrapper isrow={state ? 0 : 1}>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <Typography
                      style={{
                        color: "#fea735",
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

              <Tooltip title="Valoraciones">
                <CSSBadge badgeContent={1077} max={9999} color="primary">
                  <Rating name="read-only" value={3} readOnly precision={0.5} />
                </CSSBadge>
              </Tooltip>

              <BasketButton
                onClick={(e) => {
                  handleUpToBasket(e, { id: props.id });
                }}
                size="small"
                variant="outlined"
              >
                <BasketIcon />
              </BasketButton>
            </ActionWrapper>
          </ContentWrapper>
        </StyledCard>
      </a>
    </Link>
  );
}

export default ProductCard;
