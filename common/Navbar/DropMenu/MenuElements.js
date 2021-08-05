import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export const FilterWrapper = styled(Card)`
  display: grid;
  right: 25px;
  top: 60px;
  position: absolute;
  width: 160px;
  height: auto;
  min-width: 40px;
  z-index: 999;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 5px;

  //opacity: ${(props) => (props.show ? "1" : "0")};
  //transform: ${(props) => (props.show ? "scaleY(1)" : "scaleY(0)")};
  transition: all 200ms ease-in;
  transform-origin: top right;

  @media screen and (max-width: 360px) {
    width: 200px;
    height: 300px;
  }
`;
export const ButtonLink = styled(Button)`
  margin: 0px 7px 0px;

  &:hover {
    color: #f7ba3d;
  }

  @media screen and (max-width: 360px) {
    height: 100%;
    font-size: 15px;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #000;
  margin-bottom: 5px;

  &:hover {
    color: #f7ba3d;
  }
`;
