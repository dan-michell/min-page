import type { NextPage } from "next";
import Image from "next";
import NoScrollLink from "../components/NoScrollLink";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="sm:w-[75%] w-full px-4 sm:px-0 max-w-xl flex flex-col">
          <div className="text-5xl font-semibold mt-10">
            Hello!
            <br /> I'm Dan.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
