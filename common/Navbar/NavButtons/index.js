import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Wrapper,
  CSSBadge,
  StyledAccountCircleLine,
  StyledShoppingCart,
} from "./NavButtonsElements";
import useRequest from "@/hooks/useRequest";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "@/redux/ViewReducer/actions";
import { useSelector } from "react-redux";

function NavButtons(props) {
  const dispatch = useDispatch();
  const { ToggleDropMenu } = bindActionCreators(ActionCreators, dispatch);
  const state = useSelector((state) => state.view.showDropMenu);

  const router = useRouter();
  const { data, error } = useRequest();

  if (error) return <div>Error en la carga</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <Wrapper tohide={props.tohide}>
      <IconButton
        onClick={() => {
          ToggleDropMenu();
        }}
        aria-label="profile"
        disabled={state ? true : false}
      >
        <StyledAccountCircleLine />
      </IconButton>

      <Link href="/basket">
        <a>
          <IconButton aria-label="cart">
            <CSSBadge badgeContent={data.basket_items.length} color="secondary">
              <StyledShoppingCart
                isactive={router.pathname == "/basket" ? "active" : ""}
              />
            </CSSBadge>
          </IconButton>
        </a>
      </Link>
    </Wrapper>
  );
}

export default NavButtons;
