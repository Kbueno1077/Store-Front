import React, { useRef, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import StyledSelectField from "@/common/StyledSelectField";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useToast } from "@/hooks/useToast";
import {
  CreditWrapper,
  StyledPaper,
  InfoWrapper,
  SelectWrapper,
  WalletWrapper,
  WalletTitle,
  WalletBtn,
  WalletIndicator,
  WalletHash,
  WalletCopy,
  QrWrapper,
  ImageWrapper,
  QrDown,
  StyledButtonWrapper,
  StyledButton,
} from "./CryptoElements";

function index(props) {
  const textAreaRef = useRef(null);
  const CopyButtonRef = useRef(null);
  const displayToast = useToast();
  const [selectedCurrency, setSelectedCurrency] = useState(Currency[0]);

  function copyToClipboard() {
    textAreaRef.current.select();
    document.execCommand("copy");
    CopyButtonRef.current.focus();
    displayToast("Hash copiado");
  }

  async function downloadQR() {
    const image = await fetch("/static/images/Qr.png");
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "Wallet QR";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <CreditWrapper>
      <StyledPaper elevation={1}>
        <Typography variant="h6" align="center" gutterBottom>
          Pagar con Criptomonedas
        </Typography>
        <InfoWrapper>
          <SelectWrapper>
            <StyledSelectField
              id={"CryptoCoin"}
              required
              label="Cripto Moneda"
              labelId={"CryptoCoin"}
              items={Currency}
              size="small"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              hasimg
            />
          </SelectWrapper>
        </InfoWrapper>

        <WalletWrapper>
          <WalletTitle>
            <WalletIndicator>Billetera electrónica:</WalletIndicator>
            <WalletBtn>
              <WalletCopy
                ref={CopyButtonRef}
                onClick={copyToClipboard}
                aria-label="delete"
              >
                <FileCopyIcon fontSize="small" />
              </WalletCopy>
              <QrDown
                size="small"
                variant="outlined"
                endIcon={<GetAppIcon>QR</GetAppIcon>}
                onClick={() => downloadQR()}
              >
                QR
              </QrDown>
            </WalletBtn>
          </WalletTitle>

          <WalletHash
            readOnly
            ref={textAreaRef}
            value="3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy"
            tabIndex={-1}
          />
        </WalletWrapper>

        <QrWrapper>
          <ImageWrapper>
            <Image
              quality={100}
              objectFit="contain"
              src={"/static/images/Qr.png"}
              height={240}
              width={240}
            />
          </ImageWrapper>
        </QrWrapper>
        <StyledButtonWrapper>
          <StyledButton
            onClick={props.handleNext}
            fullWidth
            color="primary"
            variant="contained"
          >
            Continuar
          </StyledButton>
        </StyledButtonWrapper>
      </StyledPaper>
    </CreditWrapper>
  );
}

export default index;

const Currency = [
  { src: "/static/images/ustd.png", value: "USTD" },
  { src: "/static/images/LLT.png", value: "LTT" },
];
