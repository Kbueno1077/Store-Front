import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  max-width: 2000px;
  padding: 10px;
  margin: 0 auto 0;

  @media (min-width: 360px) {
    padding: 30px;
  }
`;

export const StepWrapper = styled.div``;
export const InfoIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 660px;
  padding: 0 5px 0;
  margin: 0 auto 0;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const FlexWrapper = styled.div`
  display: block;
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
export const AsideWrapper = styled.div`
  display: none;
  height: 100%;
  max-width: 500px;
  margin-right: 20px;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const SettingsWrapper = styled.div`
  flex-grow: 3;
`;
