import styled from "styled-components";
import ImgBg from "public/static/images/buy_laptop.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  z-index: -1;
  //mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const HeroContent = styled.div`
  height: calc(100vh - 140px);
  max-height: 100%;
  width: 100vw;
  max-width: 100%;
  padding: 0rem calc((100vw - 1300px));
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 665px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (min-width: 650px) {
    width: 665px;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px darkgray;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;
