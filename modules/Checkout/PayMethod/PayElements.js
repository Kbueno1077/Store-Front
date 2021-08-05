import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { BiCreditCardAlt } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa";

export const DeliverWrapper = styled.div``;

export const CardWrapper = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledCard = styled(Card)`
  height: 160px;
  margin: 5px 10px 10px 10px;

  @media (min-width: 500px) {
    width: 320px;
    height: 200px;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)`
  height: 100%;
  padding: 20px;
  border: 1px solid #d5d5d5;
`;

export const CardActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 10px;
`;

export const StyledCreditIcon = styled(BiCreditCardAlt)`
  font-size: 60px;
  color: #303f9f;
  margin: 0 0 15px;

  @media (min-width: 600px) {
    font-size: 80px;
    margin: 0 0 20px;
  }
`;

export const StyledCryptoIcon = styled(FaBitcoin)`
  font-size: 60px;
  margin: 0 0 15px;
  color: #303f9f;

  @media (min-width: 600px) {
    font-size: 80px;
    margin: 0 0 20px;
  }
`;
