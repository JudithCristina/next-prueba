import React from "react";
import Head from "next/head";
import Layout from "../Components/Layout";

const about = () => {
  return (
    <Layout>
      <Head>
        <title>Next project / about</title>
        <meta name="description" content="esto es about"></meta>
      </Head>
      <h1>About</h1>
    </Layout>
  );
};

export default about;
