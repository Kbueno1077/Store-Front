import React from "react";
import BasketProduct from "./BasketProduct";
import BasketCheckout from "./BasketCheckout";
import Image from "next/image";
import {
  BasketWrapper,
  ImageWrapper,
  ProductsWrapper,
  Title,
  CheckoutCardWrapper,
} from "./BasketElements";
import useRequest from "@/hooks/useRequest";

function Basket() {
  const { data, error } = useRequest();

  if (!data) return <div>Cargando...</div>;
  if (error) return <div>Error en la carga</div>;

  return (
    <BasketWrapper>
      <ProductsWrapper>
        <Title>Carrito de Compra</Title>

        {data.basket_items.length === 0 ? (
          <ImageWrapper>
            <Image
              src={"/static/images/shopping_app.svg"}
              objectFit="contain"
              quality={100}
              height={300}
              width={300}
            />
          </ImageWrapper>
        ) : (
          <div>
            {data.basket_items.map((item, index) => {
              return (
                <BasketProduct
                  id={item.id}
                  key={index}
                  value={item.price}
                  count={item.count}
                />
              );
            })}
          </div>
        )}
      </ProductsWrapper>

      <CheckoutCardWrapper>
        <BasketCheckout />
      </CheckoutCardWrapper>
    </BasketWrapper>
  );
}

export default Basket;
