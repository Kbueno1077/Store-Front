import React from "react";
import Toolbar from "@/modules/ProductsMarket/Toolbar";
import Catalog from "@/modules/ProductsMarket/Catalog";
import Aside from "@/modules/ProductsMarket/Aside";
import { MarketWrapper, ContainerWrapper, Wrapper } from "./ShopListElements";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function ProductsMarket() {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <MarketWrapper>
      <ContainerWrapper>
        <Aside />
        <Wrapper>
          {matches ? null : <Toolbar />}
          <Catalog />
        </Wrapper>
      </ContainerWrapper>
    </MarketWrapper>
  );
}

export default ProductsMarket;
