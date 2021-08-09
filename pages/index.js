import React from "react";
import Navbar from "@/common/Navbar";
import ProductsMarket from "@/modules/ProductsMarket";

index.title = "Secret Shop";

function index() {
  return (
    <>
      <Navbar />
      <ProductsMarket />
    </>
  );
}

export default index;
