import React from "react";
import SortOptions from "@/modules/ProductsMarket/SortOptions";
import FilterOptions from "../FilterOptions";
import {
  AsideWrapper,
  ContentWrapper,
  TitleWrapper,
  FilterWrapper,
  H4,
  ViewIcon,
  StyledButton,
} from "./AsideElements";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "@/redux/ViewReducer/actions";

function Aside() {
  const dispatch = useDispatch();
  const { ToggleDisplay } = bindActionCreators(ActionCreators, dispatch);

  return (
    <AsideWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <H4>Filtros & Orden</H4>
          <ViewIcon onClick={() => ToggleDisplay()} />
        </TitleWrapper>

        <FilterWrapper>
          <FilterOptions />
          <SortOptions />
        </FilterWrapper>

        <StyledButton color="primary" variant="outlined">
          Aplicar Filtros
        </StyledButton>
      </ContentWrapper>
    </AsideWrapper>
  );
}

export default Aside;
