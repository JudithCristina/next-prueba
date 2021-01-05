import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Users from "../Components/Users";

const index = (props) => {
  return (
    <Layout>
        <Head>
           <title>Next project/index</title> 
           <meta name="description" content="esto es index"></meta>
        </Head>
        <h1>Next</h1>
      {/* {props.users[0].id} */}
      <Users users={props.users} />
      
    </Layout>
  );
};

index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {
    users: resJSON.data,
  };
};

export default index;
