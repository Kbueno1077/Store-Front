import React from "react";
import Toolbar from "@/modules/ProductsMarket/Toolbar";
import Catalog from "@/modules/ProductsMarket/Catalog";
import Aside from "@/modules/ProductsMarket/Aside";
import { MarketWrapper, ContainerWrapper, Wrapper } from "./ShopListElements";

function ProductsMarket() {
  return (
    <MarketWrapper>
      <ContainerWrapper>
        <Aside />
        <Wrapper>
          <Toolbar />
          <Catalog />
        </Wrapper>
      </ContainerWrapper>
    </MarketWrapper>
  );
}

export default ProductsMarket;
