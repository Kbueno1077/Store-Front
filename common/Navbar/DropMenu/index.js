import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { FilterWrapper, ButtonLink } from "./MenuElements.js";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import LockIcon from "@material-ui/icons/Lock";
import Grow from "@material-ui/core/Grow";

function DropMenu() {
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 200 } : {})}
    >
      <FilterWrapper>
        <Link href="/login" passHref>
          <a>
            <ButtonLink size="small" startIcon={<PersonIcon />}>
              Iniciar Sesión
            </ButtonLink>
          </a>
        </Link>
        <Link href="/register" passHref>
          <a>
            <ButtonLink size="small" startIcon={<PersonAddIcon />}>
              Registrarse
            </ButtonLink>
          </a>
        </Link>
        <Link href="/profile" passHref>
          <a>
            <ButtonLink size="small" startIcon={<SettingsIcon />}>
              Configuración
            </ButtonLink>
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <ButtonLink size="small" startIcon={<LockIcon />}>
              Cerrar Sesión{" "}
            </ButtonLink>
          </a>
        </Link>
      </FilterWrapper>
    </Grow>
  );
}

export default DropMenu;
