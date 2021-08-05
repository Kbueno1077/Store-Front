import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 120px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin: 0 auto 0;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
