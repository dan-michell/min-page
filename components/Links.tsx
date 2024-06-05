import React from "react";
import { BsLinkedin, BsGithub, BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";

type Props = {};

const Links: React.FC<Props> = (props: Props) => {
	return (
		<div className="flex gap-5 mt-4">
			<a href="https://www.linkedin.com/in/dan-michell/" target="_blank" rel="noreferrer">
				<BsLinkedin size={24} className="hover:scale-110 transition-all" />
			</a>
			<a href="https://github.com/dan-michell" target="_blank" rel="noreferrer">
				<BsGithub size={24} className="hover:scale-110 transition-all" />
			</a>
		</div>
	);
};

export default Links;
