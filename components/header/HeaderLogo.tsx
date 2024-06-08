import React from "react";

import { PiPersonSimpleBike } from "react-icons/pi";
import NoScrollLink from "../NoScrollLink";

type Props = {};

const HeaderLogo: React.FC<Props> = (props: Props) => {
	return (
		<NoScrollLink href="/">
			<button>
				<div className="flex items-center">
					<PiPersonSimpleBike size={32} className="hover:scale-110 duration-200" />
					<span className="text-xl ml-2 font-mono font-semibold">dan_michell</span>
				</div>
			</button>
		</NoScrollLink>
	);
};

export default HeaderLogo;
