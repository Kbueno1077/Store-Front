import React from "react";
import PriceFilter from "@/modules/ProductsMarket/FilterOptions/PriceFilter";
import RatingFilter from "@/modules/ProductsMarket/FilterOptions/RatingFilter";
import SortOptions from "@/modules/ProductsMarket/SortOptions";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  ToolBarWrapper,
  ContentWrapper,
  StyledTypo,
  ActionIcons,
  AccordionDetailsWrapper,
  SpaceBetween,
  FilterIcon,
  ViewIcon,
  StyledButton,
} from "./ViewbarElements";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "@/redux/ViewReducer/actions";

function Toolbar() {
  const dispatch = useDispatch();
  const { ToggleDisplay } = bindActionCreators(ActionCreators, dispatch);

  return (
    <ToolBarWrapper>
      <ContentWrapper>
        <Accordion>
          <AccordionSummary
            aria-label="expand"
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <StyledTypo>Filtros & Orden</StyledTypo>
            <ActionIcons>
              <FormControlLabel
                aria-label="View"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<ViewIcon onClick={() => ToggleDisplay()} />}
              />
              <FormControlLabel aria-label="Filter" control={<FilterIcon />} />
            </ActionIcons>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetailsWrapper>
              <SpaceBetween>
                <div>
                  <h4>Rango de Precio</h4>
                  <PriceFilter />
                </div>
                <div>
                  <h4>Valoraciones</h4>
                  <RatingFilter name="FromToolbar" id="asideT" />
                </div>
              </SpaceBetween>

              <SpaceBetween>
                <SortOptions />
                <StyledButton color="primary" variant="outlined">
                  Aplicar Filtros
                </StyledButton>
              </SpaceBetween>
            </AccordionDetailsWrapper>
          </AccordionDetails>
        </Accordion>
      </ContentWrapper>
    </ToolBarWrapper>
  );
}
export default Toolbar;
