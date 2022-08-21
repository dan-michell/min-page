import type { NextPage } from "next";
import NoScrollLink from "../components/NoScrollLink";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <NoScrollLink href="/work">Hi</NoScrollLink>
      </div>
    </Layout>
  );
};

export default Home;
