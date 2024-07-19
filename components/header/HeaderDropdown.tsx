import React, { useState } from "react";
import { useRouter } from "next/router";

import { FiMenu } from "react-icons/fi";
import NoScrollLink from "../NoScrollLink";
import { AiFillGithub } from "react-icons/ai";

type Props = {};

const HeaderDropdown: React.FC<Props> = (props: Props) => {
	const [dropdown, setDropdown] = useState(false);
	const router = useRouter();

	return (
		<div className="flex justify-center sm:hidden">
			<div>
				<div className="relative">
					<button
						className="border-[1px] dark:border-lightish border-darkish rounded-xl hover:dark:bg-darkish-highlight hover:bg-lightish-highlight h-10 w-10 flex justify-center items-center"
						onClick={() => {
							setDropdown(!dropdown);
						}}
					>
						<FiMenu size={18} />
					</button>
					<ul
						className={`absolute ${
							dropdown ? "" : "hidden"
						} py-2 list-none rounded-lg shadow-lg mt-2 left-[-90px] w-48 backdrop-blur-lg`}
						onMouseLeave={() => {
							setDropdown(false);
						}}
					>
						<li>
							<button
								className={
									router.pathname == "/"
										? "text-sm  px-6 w-full hover:scale-110 transition-all duration-200"
										: "hidden"
								}
							>
								<NoScrollLink href="blog">Blog</NoScrollLink>
							</button>
							<button
								className={
									router.pathname == "/blog"
										? "text-sm  px-6 w-full hover:scale-110 transition-all duration-200"
										: "hidden"
								}
							>
								<NoScrollLink href="/">Home</NoScrollLink>
							</button>
						</li>
						<li>
							<button className="text-sm px-6 mt-3 w-full flex justify-center hover:scale-110 transition-all duration-200">
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
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeaderDropdown;
