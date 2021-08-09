import styled from "styled-components";
import { HiFilter } from "react-icons/hi";
import { FaThList } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const ToolBarWrapper = styled.div`
  padding-top: 20px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0px 25px 0px;
`;

export const StyledTypo = styled(Typography)`
  font-size: 1em;
  color: #292b2c;
`;

export const ActionIcons = styled.div`
  margin-left: auto;
  margin-right: -1.875em;
`;

export const AccordionDetailsWrapper = styled.div`
  justify-content: space-evenly;
  width: 100%;
  display: grid;
  row-gap: 15px;
  gap: 1.25‬em;

  @media (min-width: 500px) {
    display: flex;
  }
`;

export const SpaceBetween = styled.div`
  display: grid;
  gap: 1.25em;
`;

export const FilterIcon = styled(HiFilter)`
  cursor: pointer;
  font-size: 22px;
  align-self: center;
  justify-self: flex-end;
  margin-right: 20px;
  color: #292b2c;
`;

export const ViewIcon = styled(FaThList)`
  display: none;
  cursor: pointer;
  font-size: 20px;
  align-self: center;
  justify-self: flex-end;
  margin-right: 20px;
  color: #292b2c;

  @media (min-width: 640px) {
    display: initial;
  }
`;

export const StyledButton = styled(Button)`
  margin: 20px 0px 10px;
  width: 100%;
`;
