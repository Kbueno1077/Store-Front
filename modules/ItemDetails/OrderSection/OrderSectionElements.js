import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const PaperWrapper = styled(Paper)`
  height: max-content;
  max-width: 2000px;
  margin: 10px 50px 0;

  @media (min-width: 740px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: initial;
  }
`;

export const OrderWrapper = styled.div`
  padding: 20px;
`;
export const FirstRow = styled.div`
  display: grid;
  justify-content: center;
`;

export const BasketCard = styled.div`
  display: grid;
`;

export const Span = styled.span`
  color: gray;
`;

export const RatingWrapper = styled.div`
  display: grid;
  margin-top: 20px;
`;

export const SendBasketWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

export const BasketButton = styled(Button)`
  color: #fff;
  background: #fea735;
  margin-top: 12px;
  margin-left: 10px;

  &:hover {
    background: #d1943d;
  }
`;

export const BasketIcon = styled(AiOutlineShoppingCart)`
  font-size: 20px;
`;
