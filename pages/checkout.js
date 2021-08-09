import React from "react";
import Navbar from "@/common/Navbar";
import Checkout from "@/modules/Checkout";

index.title = "Secret Shop Checkout";

function index() {
  return (
    <>
      <Navbar />

      <Checkout />
    </>
  );
}

export default index;
