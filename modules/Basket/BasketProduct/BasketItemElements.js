import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";

export const BasketProductWrapper = styled.div`
  display: flex;
  border: solid 1px;
  border-color: ${(props) => (props.selectedcolor ? "darkgray" : "#d3d3d3")};
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 20px;
  border-radius: 20px;
  max-width: 1500px;

  @media (max-width: 570px) {
    display: grid;
  }
`;

export const LeftSection = styled.div`
  display: flex;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
  z-index: 999;
`;

export const ImgWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  width: 180px;
  height: 250px;
  cursor: pointer;

  @media (max-width: 570px) {
    padding: 10px 0px 10px -20px;
    margin-left: -20px;
    width: 100%;
    height: 180px;
  }
`;

export const ProductInfoWrapper = styled.div`
  margin-left: 20px;
  padding: 0px 10px 10px 20px;
  border-radius: 20px;
  background: ${(props) => (props.selectedcolor ? "#eae6ea" : "fff")};

  @media (max-width: 570px) {
    margin-left: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 15px;
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 18px;
`;
export const Description = styled.p``;

export const PriceWraper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 320px) {
    display: grid;
  }
`;

export const Price = styled.p`
  margin-top: 10px;
  padding-right: 20px;
`;

export const StyledRating = styled(Rating)`
  margin: 10px 10px 10px 0;
`;
