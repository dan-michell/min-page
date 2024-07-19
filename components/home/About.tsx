import React from "react";
import Image from "next/image";

import profileImage from "../../public/profile-square.jpg";
import NoScrollLink from "components/NoScrollLink";

type Props = {};

const About: React.FC<Props> = (props: Props) => {
	return (
		<div id="about" className="w-[90%] sm:w-full flex flex-col sm:flex-row items-center gap-6">
			<Image
				src={profileImage}
				sizes="100vh"
				alt="Picture of the author"
				className="aspect-square max-w-[124px] rounded-full border-[1px] border-lightish-light dark:border-darkish-light"
			/>
			<div className="font-light text-justify">
				Thank you for taking the time to look at my website! I'm currently working as a
				software / data engineer at Omnicom Media Group, based in London. Please see below
				for a couple featured blog posts or check out the{" "}
				{
					<NoScrollLink href={"/blog"}>
						<p className="inline font-bold">Blog</p>
					</NoScrollLink>
				}{" "}
				page for further projects and me talking about technologies i'm exploring.
			</div>
		</div>
	);
};

export default About;
