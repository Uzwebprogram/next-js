import type { AppProps } from "next/app";
import Head from "next/head";
import "src/styles/globals.css";
import {useEffect} from "react"
import NProgress from "nprogress";
import Router  from "next/router";
function MyApp({ Component, pageProps  }: AppProps) {

  useEffect(() => {
    
    const handleRouteStart = () => NProgress.start();
  
    const handleRouteDone = () => NProgress.done();
 
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);
 
    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
