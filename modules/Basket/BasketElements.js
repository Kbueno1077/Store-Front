import styled from "styled-components";

export const BasketWrapper = styled.div`
  display: block;
  padding: 20px;
  background-color: #fff;
  height: "max-content";
  width: 100%;
  @media (min-width: 900px) {
    display: flex;
  }
`;

export const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const ProductsWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const CheckoutCardWrapper = styled.div`
  margin-top: 20px;
  margin-left: 0px;

  @media (min-width: 900px) {
    margin-left: 40px;
    margin-top: 10px;
  }
`;
