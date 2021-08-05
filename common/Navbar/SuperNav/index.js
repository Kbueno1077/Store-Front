import React from "react";
import NavButtons from "../NavButtons";
import Link from "next/link";
import { SuperNavWrapper, GridWrapper, LogoWrapper } from "./SuperNavElements";

import Image from "next/image";

function SuperNav(props) {
  return (
    <>
      <SuperNavWrapper>
        <GridWrapper>
          <Link href="/" passHref>
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
          <NavButtons />
        </GridWrapper>
      </SuperNavWrapper>
    </>
  );
}

export default SuperNav;
