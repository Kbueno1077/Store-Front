import React from "react";
import Navbar from "@/common/Navbar";
import Basket from "@/modules/Basket";

index.title = "Secret Shop Basket";

export default function index() {
  return (
    <>
      <Navbar />
      <Basket />
    </>
  );
}
