import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const ItemDetailsWrapper = styled.div`
  height: max-content;
  background-color: #f9f9f9;
  display: block;
  padding: 40px 0px 0px;

  @media (min-width: 1000px) {
    display: block;
    padding: 40px;
  }
`;

export const BreadCombsWrapper = styled.div`
  display: grid;
  margin: 0 auto 0;
  width: 100%;
  max-width: 2000px;
`;

export const BreadCombsPaper = styled(Paper)`
  padding: 10px;
  max-width: 520px;
  width: 75%;
  margin: 0 auto 0;

  @media (min-width: 1000px) {
    max-width: 400px;
    width: 33.33%;
    margin: 10px 0px 20px;
  }
`;

export const DetailsWrapper = styled.div`
  display: block;
  padding: 0px;
  background-color: #f9f9f9;
  justify-content: center;
  height: max-content;
  margin: 0 auto 0;
  max-width: 2000px;

  @media (min-width: 1000px) {
    display: flex;
    padding: initial;
  }
`;

//First
export const FirstSection = styled.div`
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;

  @media (min-width: 1000px) {
    max-width: 400px;
    padding-top: 15px;
    margin-left: initial;
    margin-right: initial;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

//Second
export const SecondSection = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 20px auto 0px;

  @media (min-width: 1000px) {
    margin: 0px initial 0px;
  }
`;

//Third
export const ThirdSection = styled.div`
  display: block;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 40px;

  @media (min-width: 740px) {
    display: flex;
  }

  @media (min-width: 1000px) {
    display: block;
    max-width: 600px;
    padding-top: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
