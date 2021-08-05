import React from "react";
import {
  InfoWrapper,
  Title,
  Description,
  LongDescription,
  AtributesWrapper,
  AtributesKey,
  AtributesValue,
} from "./InfoSectionElements";

function InfoSection() {
  return (
    <InfoWrapper>
      <Title>Redmi 9</Title>
      <Description>
        Xiaomi Redmi 9 64GB, 4GB RAM, 6.53" Full HD + AI Quad Camera, LTE
        Factory Unlocked Smartphone - International Version (Sunset Purple)
      </Description>

      <LongDescription>
        LTE Bands 1/3/7/8/20/28/38/40 (ensure to check compatibility with your
        carrier before purchase) - Supports dual nano-SIM card + micro-SD
        expansion, either card can be set as the primary card - 6.53 FHD+ Dot
        Drop display, 2340x1080 FHD+, 394 PPI, Corning Gorilla Glass 3 - AI Face
        Unlock, Rear fingerprint sensor - 64GB 4GB RAM - Media Tek Helio G80 -
        Supports 2.4G WiFi / 5G WiFi / WiFi Direct / WiFi Display - 5020mAh
        (typ) Built-in rechargeable battery - Rear Camera: 13MP+8MP+5MP+2MP quad
        camera - Front Camera: 8MP selfie camera - Portrait mode, HDR, Selfie
        timer, Ultra wide-angle mode, Macro mode - Video: 1080p, 30fps - Factory
        Unlocked cellphones are compatible with most of the GSM carriers ( Like
        T-Mobile or ATT ) but please be aware that are not compatible with CDMA
        carriers ( Like Sprint, Boost or Verizon Wireless for example ) - FCC
        ID: 2AFZZJ19G
      </LongDescription>

      <AtributesWrapper>
        <AtributesKey>Tamaño: </AtributesKey>
        <AtributesValue>162mm x 58mm x 8.1mm </AtributesValue>
      </AtributesWrapper>
    </InfoWrapper>
  );
}

export default InfoSection;
