import styled from "styled-components";
import { SideBySideMagnifier } from "react-image-magnifiers";
import Paper from "@material-ui/core/Paper";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";

export const ImgWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

export const ImgPaper = styled(Paper)`
  width: 100%;
  justify-self: center;
  justify-content: center;
  display: none;

  @media (min-width: 1000px) {
    display: initial;
  }
`;

export const ImgSideBySide = styled(SideBySideMagnifier)`
  padding: 15px;
  margin: 0 auto;
`;

export const CarrouselPaperMobile = styled(Paper)`
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const CarrouselPaperDesktop = styled(Paper)`
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`;

export const StyledGridListTile = styled(GridListTile)`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-width: 2px;
    border-color: #fea735;
  }
`;

export const NextImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledGridList = styled(GridList)`
  flex-wrap: nowrap;
  transform: translateZ(0);
  padding: 10px;
  gap: 10px;
`;
