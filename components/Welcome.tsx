import React, { useState } from "react";
import Links from "./Links";
import Image from "next/image";

type Props = {};

const Welcome: React.FC<Props> = (props: Props) => {
	const [wave, setWave] = useState(false);

	return (
		<div className="mt-8">
			<h1 className="font-semibold relative sm:text-9xl text-[7rem] leading-[1]">
				Hello! <br /> I'm Dan.
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
