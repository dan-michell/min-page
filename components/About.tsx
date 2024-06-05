import React from "react";

type Props = {};

const About: React.FC<Props> = (props: Props) => {
	return (
		<div id="about" className="w-[90%] sm:w-full mt-12 flex flex-col">
			<p className="font-light text-justify">
				Thank you for taking the time to look at my website! I'm a software engineer based
				in London. I like to keep things simple; see below for some more info about me or
				check out the blog to see what i'm up to.
			</p>
		</div>
	);
};

export default About;
