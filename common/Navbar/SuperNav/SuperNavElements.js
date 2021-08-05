import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";

export const SuperNavWrapper = styled.nav`
  background: #292b2c;
  height: 60px;
  padding-left: 10px;
  display: none;
  position: sticky;

  @media (max-width: 644px) {
    display: grid;
  }
`;

export const GridWrapper = styled(Grid)`
  display: flex;
  max-width: 2000px;
`;

export const BarsIcon = styled(FaBars)`
  color: #fff;
  font-size: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
`;

export const LogoWrapper = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin: 8px 15px 0;

  @media (min-width: 644px) {
    margin-top: 17px;
  }
`;
