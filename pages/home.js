import Head from "next/head";
import React from "react";
import Navbar from "@/common/Navbar";
import Hero from "@/modules/Home/Hero";

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
