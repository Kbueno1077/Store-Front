import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: 15px;
  margin-top: auto;
  margin-bottom: auto;
  display: ${(props) => (props.tohide ? "none" : "flex")};

  @media (min-width: 645px) {
    margin-right: 30px;
    display: flex;
  }
`;
export const StyledShoppingCart = styled(AiOutlineShoppingCart)`
  color: ${(props) => (props.isactive ? "#f7ba3d" : "#fff")};
  font-size: 32px;
`;

export const StyledAccountCircleLine = styled(RiAccountCircleLine)`
  color: #fff;
  font-size: 32px;
`;

export const CSSBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
