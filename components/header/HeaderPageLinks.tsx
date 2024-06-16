import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { AiFillGithub } from "react-icons/ai";
import NoScrollLink from "../NoScrollLink";

type Props = {};

const HeaderPageLinks: React.FC<Props> = (props: Props) => {
	const router = useRouter();

	return (
		<div className="sm:flex items-center gap-4 hidden">
			<button className={router.pathname == "/" ? "hidden" : "hover:scale-110 duration-200"}>
				<NoScrollLink href="/">Home</NoScrollLink>
			</button>
			<button
				className={router.pathname == "/blog" ? "hidden" : "hover:scale-110 duration-200"}
			>
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
