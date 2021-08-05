import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import Paper from "@material-ui/core/Paper";

export const StepsInfoWrapper = styled.div`
  padding: 10px 5px 20px;

  @media (min-width: 420px) {
    padding: 10px 30px 20px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
`;

export const Heading = styled(Typography)``;

export const StepsInfo = styled.div`
  margin-top: 10px;
`;

export const StepTitleWrapper = styled.div`
  display: flex;
  justify-content: "flex-start";
`;

export const StepTitle = styled(Typography)``;

export const InputWrapper = styled.div`
  display: flex;
`;

export const DetailsWrapper = styled.div`
  padding-left: 10px;
  border-left: 1px solid #d5d5d5;
`;

export const InputKey = styled(Typography)``;
export const InputValue = styled(Typography)`
  color: darkgray;
  margin-left: 10px;
`;

export const ImgInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
  margin-left: 10px;
`;

export const StyledCheckIcon = styled(CheckIcon)`
  color: green;
  margin-left: 5px;
  padding-bottom: 2px;
`;

//Credit Card Form
export const CreditCardWrapper = styled.div`
  padding: 0px;

  @media (min-width: 500px) {
    padding: 20px;
  }
`;

export const CreditCardForm = styled(Paper)`
  height: 150px;
  padding-top: 15px;
  border: 1px solid #000;

  @media (min-width: 500px) {
    height: 200px;
    padding-top: 35px;
  }
`;

export const LowerCardWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 40px 0px 10px;
  padding: 0 10px 0;

  @media (min-width: 500px) {
    height: 30px;
    margin: 60px 0px 10px;
    display: flex;
  }

  @media (max-width: 320px) {
    height: 60px;
    margin: 15px 0 5px;
    display: block;
  }
`;
export const NumberCardStripe = styled.div`
  background: #d5d5d5;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    height: 50px;
  }
`;

export const DateStripe = styled.div`
  background: #d5d5d5;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: ${(props) => (props.last ? "flex-end" : "flex-start")};
  margin: 0px 5px 0px;

  @media (min-width: 500px) {
    height: 30px;
  }

  @media (max-width: 320px) {
    height: 25px;
    margin: 5px auto 5px;
  }
`;

export const CVVStripe = styled.div`
  background: #d5d5d5;
  width: 50px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: ${(props) => (props.last ? "flex-end" : "flex-start")};
  margin: 0px 5px 0px;

  @media (min-width: 500px) {
    height: 30px;
  }

  @media (max-width: 320px) {
    height: 25px;
    margin: 5px auto 5px;
  }
`;
