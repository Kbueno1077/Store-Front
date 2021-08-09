import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { CardContent } from "@material-ui/core";

export const StyledCard = styled(Card)`
  max-height: ${(props) => (props.isrow ? "200px" : "330px")};
  margin: 5px 10px 10px;

  display: ${(props) => (props.isrow ? "flex" : "block")};

  &:hover {
    box-shadow: 6px 6px 5px grey;
  }

  @media (max-width: 640px) {
    display: block;
    max-height: 330px;
  }

  @media (max-width: 370px) {
    display: block;
    width: 280px;
    margin: 5px auto 10px;
  }

  @media (max-width: 300px) {
    display: block;
    width: 260px;
  }
`;

export const StyledCardImg = styled.div`
  width: 100%;
  max-height: 160px;
  max-width: initial;

  @media (min-width: 640px) {
    max-height: ${(props) => (props.isrow ? "200px" : "160px")};
    width: 100%;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)``;

export const ImgWrapper = styled.div`
  min-height: 160px;
  width: 100%;
  padding: 10px 5px 5px;
  display: flex;
  justify-content: center;

  @media (min-width: 640px) {
    min-height: ${(props) => (props.isrow ? "200px" : "160px")};
    padding: ${(props) => (props.isrow ? "20px 10px 20px" : "10px 5px 10px")};
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
`;

export const StyledCardContent = styled(CardContent)`
  padding-top: 0px;
`;

export const StyledTypo = styled(Typography)`
  margin-top: 0px;

  @media (min-width: 640px) {
    margin-top: ${(props) => (props.isrow ? "1rem" : "0")};
  }
`;

export const TruncateText = styled.p`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.54);
  line-height: 1rem;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;

  @media (min-width: 640px) {
    -webkit-line-clamp: ${(props) => (props.isrow ? 6 : 3)};
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  min-height: 70px;
  padding: 0 20px 0 20px;
  align-items: center;

  @media (min-width: 640px) {
    align-items: ${(props) => (props.isrow ? "flex-end" : "center")};
    padding: ${(props) => (props.isrow ? "0 50px 30px 20px" : "0 20px 0 20px")};
  }
`;

export const CSSBadge = withStyles((theme) => ({
  badge: {
    right: 25,
    top: -10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export const BasketButton = styled(Button)`
  color: #f7ba3d;
  border: none;
  margin-left: -20px;

  @media (min-width: 300px) {
    margin-left: auto;
  }
`;

export const BasketIcon = styled(AiOutlineShoppingCart)`
  font-size: 25px;
`;
