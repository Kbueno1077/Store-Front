import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const CreditWrapper = styled.div`
  padding: 0 10px 0;
`;

export const StyledPaper = styled(Paper)`
  padding: 30px;
  border: 1px solid #d5d5d5;
  max-width: 660px;
  margin: 0 auto 20px;
`;

export const CreditPickerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin-top: 20px;
`;

export const CreditButton = styled.div`
  cursor: pointer;
  border: ${(props) =>
    props.selected ? "1px solid blue" : "1px solid #d5d5d5"};
  border-radius: 5px;
  height: 60px;
  width: 90px;
  padding: 3px;
  margin: 4px 2px 0;

  &:hover {
    border-color: #303f9f;
  }
`;

export const SelectWrapper = styled.div`
  @media (min-width: 420px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const DatePickerWrapper = styled.div`
  width: 100%;

  @media (min-width: 420px) {
    margin-right: 10px;
  }
`;

export const CVVWrapper = styled.div``;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  margin: 10px 0 10px auto;

  @media (min-width: 650px) {
    width: 160px;
  }
`;
