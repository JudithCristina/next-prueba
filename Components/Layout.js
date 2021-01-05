import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Next project/services</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"/>
        <meta name="description" content="esto es services"></meta>
      </Head>
      <Navigation />
      <div className="container p-4">{props.children}</div>
    </div>
  );
};

export default Layout;
