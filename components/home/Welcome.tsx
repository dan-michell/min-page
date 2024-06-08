import React, { useState } from "react";
import Links from "../links/Links";
import Image from "next/image";

import profileImage from "../public/profile-square.jpg";

type Props = {};

const Welcome: React.FC<Props> = (props: Props) => {
	return (
		<div className="mt-8 whitespace-nowrap">
			<h1 className="font-semibold relative sm:text-9xl text-[112px] leading-[1]">
				<div className="flex">Hello!</div>
				I'm Dan.
			</h1>
			<div className="ml-2 items-start flex-col flex gap-2">
				<h3 className="font-extralight sm:text-2xl text-xl">Software Engineer.</h3>
				<Links />
			</div>
		</div>
	);
};

export default Welcome;
