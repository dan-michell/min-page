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
			<div className="flex justify-center">
				<div className="sm:max-w-[600px] flex flex-col items-center sm:items-start">
					<Welcome />
					<About />
					<Work />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
