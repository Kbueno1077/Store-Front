import styled from "styled-components";
import Button from "@material-ui/core/Button";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import FormikSelectCountry from "@/common/FormikComponents/FormikSelectFields/FormikSelectCountry";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import CancelIcon from "@material-ui/icons/Cancel";

export const TextFieldWrapper = styled.div`
  margin: 10px 0 20px;
  width: 100%;
`;

export const SFormikSelectCountry = styled(FormikSelectCountry)`
  max-width: 170px;
  min-width: 90px;
  margin: 10px 10px 20px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 35px;
  width: 100%;
`;

export const StyledButton = styled(Button)``;

export const StyledVerifiedIcon = styled(VerifiedUserIcon)`
  color: green;
`;

export const StyledNonVerifiedIcon = styled(CancelIcon)`
  color: red;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
