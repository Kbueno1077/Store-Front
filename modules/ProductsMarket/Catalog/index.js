import React from "react";
import ProductCard from "./ProductCard";
import Pagination from "@material-ui/lab/Pagination";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  CatalogWrapper,
  ProductsWrapper,
  PaginationWrapper,
} from "./CatalogElements";
import { useSelector } from "react-redux";

function Catalog() {
  const state = useSelector((state) => state.view.displayRows);

  return (
    <CatalogWrapper>
      <ProductsWrapper isrow={state ? 1 : 0}>
        <ProductCard id={1} />
        <ProductCard id={2} />
        <ProductCard id={3} />
        <ProductCard id={4} />
        <ProductCard id={4} /> <ProductCard id={4} /> <ProductCard id={4} />
        <ProductCard id={4} /> <ProductCard id={4} /> <ProductCard id={4} />
        <ProductCard id={4} /> <ProductCard id={4} /> <ProductCard id={4} />
        <ProductCard id={4} /> <ProductCard id={4} /> <ProductCard id={4} />
        <ProductCard id={4} /> <ProductCard id={4} /> <ProductCard id={4} />
      </ProductsWrapper>
      <PaginationWrapper>
        <Pagination count={10} shape="rounded" />
      </PaginationWrapper>
    </CatalogWrapper>
  );
}

export default Catalog;

// <ProductCard id={1} />
// <ProductCardSkeleton/>
