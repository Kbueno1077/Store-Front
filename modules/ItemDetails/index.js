import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ImgSection from "./ImgSection";
import InfoSection from "./InfoSection";
import OrderSection from "./OrderSection";
import VariationSection from "./VariationSection";
import {
  ItemDetailsWrapper,
  BreadCombsWrapper,
  BreadCombsPaper,
  DetailsWrapper,
  FirstSection,
  SecondSection,
  ThirdSection,
} from "./DetailsElements";
import Link from "next/link";

function index() {
  return (
    <ItemDetailsWrapper>
      <BreadCombsWrapper>
        <BreadCombsPaper elevation={3}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/" passHref>
              <a> Inicio </a>
            </Link>

            <a style={{ cursor: "pointer" }}> Detalles del Producto </a>
          </Breadcrumbs>
        </BreadCombsPaper>
      </BreadCombsWrapper>
      <DetailsWrapper>
        <FirstSection>
          <ImgSection />
        </FirstSection>

        <SecondSection>
          <InfoSection />
        </SecondSection>

        <ThirdSection>
          <OrderSection />
          <VariationSection />
        </ThirdSection>
      </DetailsWrapper>
    </ItemDetailsWrapper>
  );
}

export default index;
