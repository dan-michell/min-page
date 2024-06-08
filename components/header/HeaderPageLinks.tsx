import React from "react";

import { AiFillGithub } from "react-icons/ai";
import NoScrollLink from "../NoScrollLink";

type Props = {};

const HeaderPageLinks: React.FC<Props> = (props: Props) => {
	return (
		<div className="sm:flex items-center gap-4 hidden">
			<button className="hover:scale-110 duration-200">
				<NoScrollLink href="blog">Blog</NoScrollLink>
			</button>
			<button className="hover:scale-110 duration-200">
				<a
					className="flex gap-1 items-center"
					href="https://github.com/dan-michell/min-page"
					target="_blank"
					rel="noreferrer"
				>
					Source
					<AiFillGithub size={22} />
				</a>
			</button>
		</div>
	);
};

export default HeaderPageLinks;
