import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export const CreditWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CreditPickerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
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

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
