import React, { useState } from "react";
import NavButtons from "../NavButtons";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import Image from "next/image";
import {
  NavWrapper,
  CenterWrapper,
  Nav,
  LogoWrapper,
  GridWrapper,
  SelectField,
  SearchIcon,
  SearchInput,
  ButtonSearch,
} from "./NavegationElements";

function Navegation() {
  const [catergory, setCategory] = useState("Todos");

  return (
    <NavWrapper>
      <CenterWrapper>
        <Nav>
          <GridWrapper>
            <Link href="/" passref>
              <a>
                <LogoWrapper>
                  <Image
                    src={"/static/images/shop_logo.png"}
                    alt="Logo"
                    quality={100}
                    objectFit="contain"
                    height={40}
                    width={40}
                    priority
                  />
                </LogoWrapper>
              </a>
            </Link>

            <SelectField
              value={catergory}
              defaultValue={catergory}
              onChange={(event) => setCategory(event.target.value)}
              displayEmpty
              autoWidth
              disableUnderline
            >
              {catergories.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectField>

            <SearchInput placeholder="Buscar" />

            <ButtonSearch disableElevation variant="contained">
              <SearchIcon />
            </ButtonSearch>

            <NavButtons tohide />
          </GridWrapper>
        </Nav>
      </CenterWrapper>
    </NavWrapper>
  );
}

export default Navegation;

const catergories = [
  {
    value: "Todos",
    label: "Todos",
  },
  {
    value: "Categoria 1",
    label: "Categoria 1",
  },
  {
    value: "Categoria 2",
    label: "Categoria 2",
  },
  {
    value: "Categoria 3",
    label: "Categoria 3",
  },
  {
    value: "Categoria 4",
    label: "Categoria 4",
  },
];
