import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";

function index() {
  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ color: "firebrick", marginBottom: "50px" }}>
        Ha ocurrido un error.
      </h1>

      <Link href="/" passref>
        <a>
          <Button variant="outlined" align="center">
            Volver al mercado
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default index;
