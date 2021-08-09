import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export const TextFieldWrapper = styled.div`
  margin: 10px 0 20px;
  width: 100%;
`;

export const ValidationsWrapper = styled.div`
  background: #f5f5f5;
  padding: 15px;
`;

export const Validation = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`;

export const StyledCheckIcon = styled(CheckIcon)`
  color: green;
  margin-right: 2px;
`;

export const StyledClearIcon = styled(ClearIcon)`
  color: red;
  margin-right: 2px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const LoadingIcon = styled(RotateLeftIcon)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  animation: spin 1s linear infinite;
`;
