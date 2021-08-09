import styled from "styled-components";
import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

function index() {
  return (
    <>
      <DesktopWrapper>
        <Desktop />
      </DesktopWrapper>
      <MobileWrapper>
        <Mobile />
      </MobileWrapper>
    </>
  );
}

export default index;

const DesktopWrapper = styled.div`
  display: none;
  margin-top: auto;
  margin-bottom: auto;

  @media (min-width: 560px) {
    display: block;
  }
`;

const MobileWrapper = styled.div`
  @media (min-width: 560px) {
    display: none;
  }
`;
