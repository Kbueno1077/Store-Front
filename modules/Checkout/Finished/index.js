import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Image from "next/image";

function index() {
  return (
    <>
      <div style={{ margin: "50px", textAlign: "center" }}>
        <h1 style={{ color: "firebrick", marginBottom: "50px" }}>
          Pedido enviado con exito.
        </h1>

        <div style={{ marginBottom: "10px", textAlign: "center" }}>
          <Image
            height={200}
            width={300}
            objectFit="contain"
            alt={"tile.title"}
            src={"/static/images/ReportEnd.svg"}
          />
        </div>

        <Link href="/" passref>
          <a>
            <Button variant="outlined" align="center">
              Volver al mercado
            </Button>
          </a>
        </Link>
      </div>
    </>
  );
}

export default index;
