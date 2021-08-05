import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardContent } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
    values: { xs: 0, sm: 570, md: 700, lg: 1100, xl: 1200, xxl: 1400 },
  },
});

const StyledGrid = ({ xxl, ...other }) => {
  const xxlClass = `MuiGrid-grid-xxl-${xxl}`;
  return <Grid className={xxlClass} {...other} />;
};

function ProductCardSkeleton() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <StyledGrid container item xs={12} sm={6} md={4} lg={3}>
          <SkeletonCards />
        </StyledGrid>
        <StyledGrid container item xs={12} sm={6} md={4} lg={3}>
          <SkeletonCards />
        </StyledGrid>
        <StyledGrid container item xs={12} sm={6} md={4} lg={3}>
          <SkeletonCards />
        </StyledGrid>
        <StyledGrid container item xs={12} sm={6} md={4} lg={3}>
          <SkeletonCards />
        </StyledGrid>{" "}
        <StyledGrid container item xs={12} sm={6} md={4} lg={3}>
          <SkeletonCards />
        </StyledGrid>{" "}
        <StyledGrid container item xs={12} sm={6} md={4} lg={3}>
          <SkeletonCards />
        </StyledGrid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default ProductCardSkeleton;

function SkeletonCards() {
  return (
    <StyledCard>
      <StyledCardActionArea>
        <Skeleton variant="rect" width={250} height={140} />
      </StyledCardActionArea>

      <CardContent>
        <Skeleton />
        <Skeleton width="40%" />
      </CardContent>
      <CardContent>
        <Skeleton />
      </CardContent>
    </StyledCard>
  );
}

export const StyledCard = styled(Card)`
  max-height: "330px";
  margin: 5px 10px 10px;

  &:hover {
    box-shadow: 4px 4px 5px grey;
  }
  @media (max-width: 700px) {
    margin: 5px auto 10px;
  }

  @media (max-width: 420px) {
    display: block;
    max-height: 330px;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)`
  width: 100%;
  max-height: 140px;
  max-width: initial;

  @media (min-width: 4120px) {
    max-height: "140px";
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
`;

export const StyledCardContent = styled(CardContent)`
  padding-top: 0px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  min-height: 70px;
  padding: 0 20px 0 20px;
  align-items: center;

  @media (min-width: 4120px) {
    align-items: center;
    padding: 0 20px 0 20px;
  }
`;
