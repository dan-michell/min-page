import React from "react";

type Props = {};

const About: React.FC<Props> = (props: Props) => {
	return (
		<div id="about" className="w-[90%] sm:w-auto mt-6 flex flex-col">
			{/* <h1 className="sm:text-2xl text-xl font-bold border-b-2 w-fit mb-2">
        About
      </h1> */}
			<p className="font-light text-justify">
				Thank you for taking the time to look at my website! I'm Dan, a software engineer
				based in London. I like to keep things simple; see below for some more info about me
				or check out the{" "}
				<i>
					<b>Feed</b>
				</i>{" "}
				page to see what i'm up to.
				{/* Add profile pic */}
			</p>
		</div>
	);
};

export default About;
