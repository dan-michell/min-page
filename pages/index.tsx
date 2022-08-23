import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next";
import NoScrollLink from "../components/NoScrollLink";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="sm:w-[75%] w-full px-4 sm:px-0 max-w-xl flex flex-col items-center sm:items-start">
          <Welcome />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
