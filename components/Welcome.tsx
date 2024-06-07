import React, { useState } from "react";
import Links from "./links/Links";
import Image from "next/image";

import profileImage from "../public/profile-square.jpg";

type Props = {};

const Welcome: React.FC<Props> = (props: Props) => {
	return (
		<div className="mt-8 whitespace-nowrap">
			<h1 className="font-semibold relative sm:text-9xl text-[6rem] leading-[1]">
				<div className="flex">
					Hello!
					{/* <Image
						src={profileImage}
						sizes="100vh"
						alt="Picture of the author"
						className="aspect-square max-w-[112px] ml-3 rounded-full self-end border-[1px] border-lightish-light dark:border-darkish-light"
					/> */}
				</div>
				I'm Dan.
			</h1>
			<div className="ml-2">
				<h3 className="font-extralight sm:text-2xl text-xl flex flex-wrap text-left">
					Software / Data Engineer.
				</h3>
				<Links />
			</div>
		</div>
	);
};

export default Welcome;
