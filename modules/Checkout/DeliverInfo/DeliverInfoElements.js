import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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

export const StyledAccountIcon = styled(AccountCircleIcon)`
  font-size: 60px;
  color: #303f9f;
  margin: 0 0 10px;

  @media (min-width: 600px) {
    font-size: 80px;
  }
`;

export const StyledEditIcon = styled(EditIcon)`
  font-size: 60px;
  margin: 0 0 10px;
  color: #303f9f;

  @media (min-width: 600px) {
    font-size: 80px;
  }
`;

//inputs

export const PaperWrapper = styled.div`
  width: 100%;
  margin: 0 auto 0;

  @media (min-width: 1000px) {
    width: 600px;
  }
`;
export const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 10px auto 0;
  border: 1px solid #d5d5d5;
  max-width: 515px;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: block;
  width: 100%;
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 500px) {
    width: 200px;
  }
`;

export const useStyles = makeStyles((theme) => ({
  input_number: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
      {
        display: "none",
      },
  },
}));
