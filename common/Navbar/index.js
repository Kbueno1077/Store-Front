import React, { useState } from "react";
import Navegation from "./Navegation";
import SuperNav from "./SuperNav";
import DropMenu from "./DropMenu";
import { useSelector } from "react-redux";
import useVisible from "@/hooks/useVisible";
import { bindActionCreators } from "redux";
import * as ActionCreators from "@/redux/ViewReducer/actions";
import { useDispatch } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

function Navbar() {
  const dispatch = useDispatch();
  const { ToggleDropMenu } = bindActionCreators(ActionCreators, dispatch);
  const state = useSelector((state) => state.view.showDropMenu);
  const { ref } = useVisible(state, ToggleDropMenu);

  return (
    <>
      <SuperNav />
      <Navegation />
      {state && (
        <div ref={ref}>
          <DropMenu state={state} />
        </div>
      )}
    </>
  );
}

export default Navbar;
