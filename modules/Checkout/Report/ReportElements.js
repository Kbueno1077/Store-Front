import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const Wrapper = styled.div`
  @media (min-width: 1000px) {
    padding: 25px 100px 25px;
  }
`;

export const PaperWrapper = styled(Paper)`
  padding: 25px 25px 25px;
  border: 1px solid #d5d5d5;

  @media (min-width: 500px) {
    padding: 35px 55px 35px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  color: firebrick;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  border-block-end: 1px solid #000;
  display: flex;
`;

export const PersonalDataWrapper = styled.div`
  margin-top: 25px;
`;

export const IndividualDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid silver;

  @media (min-width: 500px) {
    padding: 0px 0px 0px 20px;
    border-bottom: none;
  }
`;

export const InfoKey = styled(Typography)`
  font-weight: bold;
`;

export const InfoValue = styled(Typography)`
  padding-left: 10px;
`;
export const HashValue = styled(InfoValue)`
  word-break: break-all;
`;

export const ImageWrapper = styled.div`
  margin-left: 15px;
`;

export const AccordionWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #d5d5d5;
`;

export const ProductWrapper = styled.div`
  margin: 20px 0 20px;
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid silver;

  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    text-align: initial;
    border-bottom: none;
    padding-bottom: 0px;
  }
`;

export const Description = styled(Typography)`
  padding-top: 20px;
  margin-bottom: 10px;

  @media (min-width: 500px) {
    padding-left: 20px;
    padding-top: 0px;
    margin-bottom: 0px;
  }
`;

export const Price = styled.a`
  @media (min-width: 500px) {
    padding-bottom: 15px;
    padding-left: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: block;
  width: 100%;
  @media (min-width: 500px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 15px;
  margin-bottom: 10px;
  @media (min-width: 500px) {
    width: 200px;
  }
`;
