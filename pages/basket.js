import React from "react";
import Navbar from "@/common/Navbar";
import Basket from "@/modules/Basket";

index.title = "Secret Shop Basket";

export default function index() {
  return (
    <>
      <Navbar />
      <div style={{ background: "#f9f9f9", width: "100%", margin: 0 }}>
        <div style={{ maxWidth: "2000px", margin: "0 auto" }}>
          <Basket />
        </div>
      </div>
    </>
  );
}
