import React, { useState } from "react";
import Image from "next/image";
import {
  ImgWrapper,
  ImgPaper,
  ImgSideBySide,
  CarrouselPaperMobile,
  CarrouselPaperDesktop,
  StyledGridListTile,
  StyledGridList,
  NextImgWrapper,
} from "./ImgSectionElements";

function ImgSection() {
  const [imgSelected, setImg] = useState("/static/images/AppleWatchS6.jpg");
  return (
    <ImgWrapper>
      <ImgPaper elevation={3}>
        <ImgSideBySide
          imageSrc={imgSelected}
          largeImageSrc={imgSelected}
          alwaysInPlace={true}
          overlayOpacity={0.6}
          switchSides={false}
          zoomPosition="left"
          inPlaceMinBreakpoint={641}
          fillAvailableSpace={false}
          fillAlignTop={false}
          fillGapTop={0}
          fillGapRight={10}
          fillGapBottom={10}
          fillGapLeft={10}
          zoomContainerBorder="1px solid #ccc"
          zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
        />
      </ImgPaper>
      <CarrouselPaperMobile elevation={3}>
        <StyledGridList cols={1} cellHeight={300}>
          <StyledGridListTile key={"tile.img1"}>
            <NextImgWrapper>
              <Image
                height={300}
                width={300}
                objectFit="contain"
                src={"/static/images/AppleWatchS6.jpg"}
                alt={"tile.title"}
              />
            </NextImgWrapper>
          </StyledGridListTile>
          <StyledGridListTile key={"tile.img2"}>
            <NextImgWrapper>
              <Image
                height={300}
                width={300}
                objectFit="contain"
                src={"/static/images/AppleWatchS6.jpg"}
                alt={"tile.title"}
              />
            </NextImgWrapper>
          </StyledGridListTile>
          <StyledGridListTile key={"tile.img3"}>
            <NextImgWrapper>
              <Image
                height={300}
                width={300}
                objectFit="contain"
                src={"/static/images/AppleWatchS6.jpg"}
                alt={"tile.title"}
              />
            </NextImgWrapper>
          </StyledGridListTile>
          <StyledGridListTile key={"tile.img4"}>
            <NextImgWrapper>
              <Image
                height={300}
                width={300}
                objectFit="contain"
                src={"/static/images/og.png"}
                alt={"tile.title"}
                onClick={() => {
                  setImg("/static/images/og.png");
                }}
              />
            </NextImgWrapper>
          </StyledGridListTile>
        </StyledGridList>
      </CarrouselPaperMobile>

      <CarrouselPaperDesktop elevation={3}>
        <StyledGridList cols={3.15} cellHeight={90}>
          <StyledGridListTile key={"tile.img1"}>
            <NextImgWrapper>
              <Image
                height={90}
                width={90}
                objectFit="contain"
                src={"/static/images/AppleWatchS6.jpg"}
                alt={"tile.title"}
              />
            </NextImgWrapper>
          </StyledGridListTile>
          <StyledGridListTile key={"tile.img2"}>
            <NextImgWrapper>
              <Image
                height={90}
                width={90}
                objectFit="contain"
                src={"/static/images/AppleWatchS6.jpg"}
                alt={"tile.title"}
              />
            </NextImgWrapper>
          </StyledGridListTile>
          <StyledGridListTile key={"tile.img3"}>
            <NextImgWrapper>
              <Image
                height={90}
                width={90}
                objectFit="contain"
                src={"/static/images/AppleWatchS6.jpg"}
                alt={"tile.title"}
                onClick={() => {
                  setImg("/static/images/AppleWatchS6.jpg");
                }}
              />
            </NextImgWrapper>
          </StyledGridListTile>
          <StyledGridListTile key={"tile.img4"}>
            <NextImgWrapper>
              <Image
                height={90}
                width={90}
                objectFit="contain"
                src={"/static/images/og.png"}
                alt={"tile.title"}
                onClick={() => {
                  setImg("/static/images/og.png");
                }}
              />
            </NextImgWrapper>
          </StyledGridListTile>
        </StyledGridList>
      </CarrouselPaperDesktop>
    </ImgWrapper>
  );
}

export default ImgSection;
