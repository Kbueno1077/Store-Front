import React from "react";
import PriceFilter from "@/modules/ProductsMarket/FilterOptions/PriceFilter";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RatingFilter from "./RatingFilter";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { StyledTypo, PriceWrapper, RatingWrapper } from "./FilterElements";

function FilterOptions() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-label="expand"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <StyledTypo>Precio</StyledTypo>
        </AccordionSummary>
        <AccordionDetails>
          <PriceWrapper>
            <PriceFilter />
          </PriceWrapper>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-label="expand"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <StyledTypo>Valoraciones</StyledTypo>
        </AccordionSummary>
        <AccordionDetails>
          <RatingWrapper>
            <RatingFilter name="FromAside" id="asideR" />
          </RatingWrapper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FilterOptions;
