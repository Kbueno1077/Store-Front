import React from "react";
import { useRouter } from "next/router";
import Details from "@/modules/ItemDetails/";
import Navbar from "@/common/Navbar";

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <Details />
    </>
  );
};

index.title = "Secret Shop Products";

export default index;
