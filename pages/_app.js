import NextApp from "next/app";
import React from "react";
import Head from "next/head";
import { StylesProvider } from "@material-ui/core/styles";
import { ToastProvider } from "react-toast-notifications";
import "../styles/globals.css";
import { SWRConfig } from "swr";
import { Provider } from "react-redux";
import store from "@/redux/store";

import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider injectFirst>
        <ToastProvider autoDismissTimeout="3000" placement="top-center">
          <Provider store={store}>
            <SWRConfig value={{ fetcher }}>
              <Head>
                <title>{Component.title}</title>
              </Head>
              <Component {...pageProps} />{" "}
            </SWRConfig>
          </Provider>
        </ToastProvider>{" "}
      </StylesProvider>
    );
  }
}

/*
 
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
 
  import { ThemeProvider as StyledThemeProvider } from "styled-components";

  
const theme = {
  primary: "#f2f2f2",
  ...createMuiTheme(),
};

  <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
           </StyledThemeProvider>
      </MaterialThemeProvider>
       */
