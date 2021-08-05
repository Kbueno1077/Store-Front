import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Image from "next/image";
import {
  PaperWrapper,
  CaracteristicWrapper,
  VariantsWrapper,
  SmallPicContainer,
  SmallPic,
  useStyles,
} from "./VariationSectionElements";

function index() {
  return (
    <PaperWrapper>
      <CaracteristicWrapper>
        <h4>Modelo del producto:</h4>
        <VariantsWrapper>
          <Color />
          <Size />
        </VariantsWrapper>
      </CaracteristicWrapper>
    </PaperWrapper>
  );
}

export default index;

function Color() {
  return (
    <CaracteristicWrapper>
      <h4>Color</h4>

      <SmallPicContainer>
        <SmallPic>
          <Image
            height={75}
            width={75}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/AppleWatchS6.jpg"}
          />
        </SmallPic>
        <SmallPic>
          <Image
            height={75}
            width={75}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/AppleWatchS6.jpg"}
          />
        </SmallPic>
        <SmallPic>
          <Image
            height={75}
            width={75}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/AppleWatchS6.jpg"}
          />
        </SmallPic>
        <SmallPic>
          <Image
            height={75}
            width={75}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/AppleWatchS6.jpg"}
          />
        </SmallPic>
        <SmallPic>
          <Image
            height={75}
            width={75}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/AppleWatchS6.jpg"}
          />
        </SmallPic>
        <SmallPic>
          <Image
            height={75}
            width={75}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/AppleWatchS6.jpg"}
          />
        </SmallPic>
        <SmallPic>
          <Image
            height={75}
            width={75}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/AppleWatchS6.jpg"}
          />
        </SmallPic>
      </SmallPicContainer>
    </CaracteristicWrapper>
  );
}

function Size() {
  const classes = useStyles();
  const [selecterSize, setSelecterSize] = useState("");

  const handleChange = (event) => {
    setSelecterSize(event.target.value);
  };

  return (
    <CaracteristicWrapper>
      <FormControl className={classes.root} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Talla</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Talla"
          value={selecterSize}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
          <MenuItem value={"M"}>M</MenuItem>
          <MenuItem value={"L"}>L</MenuItem>
          <MenuItem value={"XL"}>XL</MenuItem>
          <MenuItem value={"XXL"}>XXL</MenuItem>
        </Select>
      </FormControl>
    </CaracteristicWrapper>
  );
}
