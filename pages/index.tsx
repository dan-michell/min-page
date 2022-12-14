import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next";
import NoScrollLink from "../components/NoScrollLink";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Work from "../components/Work";
import Blog from "../components/Blog";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="sm:w-[75%] min-w-[80%] sm:min-w-0 px-4 sm:px-0 max-w-xl flex flex-col items-center sm:items-start">
          <Welcome />
          <About />
          <Blog />
          <Work />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
