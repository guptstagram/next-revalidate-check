import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // console.log("MyApp component");
  return (
    <>
      <Head>
        <title>Random Number</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
