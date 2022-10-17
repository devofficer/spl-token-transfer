import Head from "next/head";
import { Global } from "@emotion/react";
import xw from "xwind";
import NavBar from "../components/navbar/NavBar";
import { store } from "../store";
import { Provider } from "react-redux";
import "./custom.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>VTVL Frontend</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
