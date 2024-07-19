import React from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Welcome from "../components/home/Welcome";
import About from "../components/home/About";
import FeaturedPosts from "components/home/FeaturedPosts";

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="flex justify-center">
				<div className="sm:max-w-[600px] flex flex-col items-center sm:items-start gap-12">
					<Welcome />
					<About />
					<FeaturedPosts />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
