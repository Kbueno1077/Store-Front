import styled from "styled-components";
import { FaThList } from "react-icons/fa";
import Button from "@material-ui/core/Button";

export const AsideWrapper = styled.div`
  display: none;
  height: 100%;
  padding-top: 1.6875em;
  padding-left: 1.25em;
  width: 24rem;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  height: 100%;
  border-right: 2px solid #dddddd;
  border-bottom: 2px solid #dddddd;
  padding: 0px 20px 0px 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 20px;
`;

export const H4 = styled.h4`
  color: #292b2c;
`;

export const ViewIcon = styled(FaThList)`
  cursor: pointer;
  font-size: 1.25em;
  align-self: center;
  justify-self: flex-end;
  color: #292b2c;
`;

export const FilterWrapper = styled.div`
  display: grid;
  gap: 1.25em;
  margin-bottom: 1.25em;
`;

export const StyledButton = styled(Button)`
  margin: 10px 0px 10px;
`;
