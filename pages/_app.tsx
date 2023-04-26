import React from 'react';
import Head from 'next/head'

import '../styles/app.css';
import '../display/styles/app.scss';
import '../display/styles/custom-setting.scss';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Buildify</title>
    </Head>
    <Component {...pageProps} />
  </>;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
