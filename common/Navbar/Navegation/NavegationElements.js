import styled from "styled-components";
import { Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { BiSearchAlt } from "react-icons/bi";
import { withStyles } from "@material-ui/core/styles";

export const SelectField = withStyles({
  root: {
    background: "#F6F6F6",
    color: "#33333",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    height: "20px",
    border: "1px outset",
    marginLeft: "15px",
    padding: "8px",
    paddingTop: "10px",

    "&:focus": {
      backgroundColor: "#F6F6F6",
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    "&:hover": {
      backgroundColor: "#DADADA",
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
  },
})(Select);

export const NavWrapper = styled.div`
  background: #292b2c;
  width: 100%;
`;

export const CenterWrapper = styled.div`
  margin: 0 auto;
  //max-width: 2200px;
`;

export const Nav = styled.nav`
  display: grid;
  background: #292b2c;
  height: 70px;
  padding-left: 5px;
  position: sticky;
  margin: 0 auto 0;
`;

export const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  // max-width: 2000px;
`;

export const LogoWrapper = styled.div`
  width: 50px;
  height: 45px;
  cursor: pointer;
  margin: 5px 0 0 15px;

  @media (max-width: 644px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  max-width: 700px;
  border: 1px outset;
  border-radius: none;
  padding: 10px;
  margin-top: auto;
  margin-bottom: auto;
  outline: none;
`;

export const ButtonSearch = styled(Button)`
  background: #fea734;
  height: 40px;
  width: 20px;
  margin: auto 15px auto 0;
  border: 1px outset;
  border-color: #f7ba3d;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  &:hover {
    background-color: #f3a847;
    border-color: #f3a847;
  }
`;

export const SearchIcon = styled(BiSearchAlt)`
  font-size: 25px;
`;
