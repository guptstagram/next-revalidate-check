import Head from "next/head";

export const getStaticProps = async () => {
  const randNum = Math.floor(Math.random() * 10000);
  return {
    props: {
      revalidate: 50,
      randNum,
    },
  };
};

const Home = ({ randNum }) => {
  return (
    <>
      <Head>
        <title>Random Number App</title>
      </Head>
      <h1>Random Number is {randNum}</h1>
    </>
  );
};

export default Home;