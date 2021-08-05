import styled from "styled-components";

export const CatalogWrapper = styled.div`
  overflow: auto;
  background: #f9f9f9;
  padding: 20px 0px 20px;

  // max-width: 1850px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  //margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-self: center;
  justify-items: center;

  @media (min-width: 330px) {
    display: block;
    margin: 0px 20px 0px;
  }

  @media (min-width: 640px) {
    display: ${(props) => (props.isrow ? "grid" : "block")};
    max-width: ${(props) => (props.isrow ? "initial" : "1800px")};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  margin: 20px auto 20px;
  justify-content: center;
`;
