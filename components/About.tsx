import React from "react";
import Image from "next/image";

import profileImage from "../public/profile-square.jpg";

type Props = {};

const About: React.FC<Props> = (props: Props) => {
	return (
		<div id="about" className="w-[90%] sm:w-full mt-12 flex items-center gap-6">
			<Image
				src={profileImage}
				sizes="100vh"
				alt="Picture of the author"
				className="aspect-square max-w-[124px] rounded-full border-[1px] border-lightish-light dark:border-darkish-light"
			/>
			<p className="font-light text-justify">
				Thank you for taking the time to look at my website! I'm a software engineer based
				in London. I like to keep things simple; see below for some more info about me or
				check out the blog to see what i'm up to.
			</p>
		</div>
	);
};

export default About;
