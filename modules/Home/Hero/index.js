import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Bienvenido a</HeroH1>
          <HeroP>La Tienda Secreta</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
