import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
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

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const SelectWrapper = styled.div`
  width: 100%;
`;

//2nd part
export const WalletWrapper = styled.div`
  margin-top: 15px;
`;

export const WalletTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 300px) {
    margin-bottom: 20px;
  }
`;

export const WalletBtn = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 300px) {
    display: block;
  }
`;

export const WalletIndicator = styled.p`
  font-size: 20px;
  color: gray;
`;

export const WalletCopy = styled(IconButton)`
  margin-top: 5px;
`;

export const WalletHash = styled.textarea`
  width: 100%;
  color: gray;
  font-size: 20px;

  margin-top: 5px;
  word-break: break-all;
  border: none;
  resize: none;
  height: initial;

  @media (max-width: 300px) {
    height: 80px;
  }
`;

export const QrWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  border: 1px solid #d5d5d5;
`;

export const QrDown = styled(Button)`
  margin-top: 5px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin: 10px auto 10px;
  width: 100%;

  @media (min-width: 400px) {
    width: 250px;
  }
`;
