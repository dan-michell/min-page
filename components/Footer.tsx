import React from "react";
import LinksReduced from "./LinksReduced";

type Props = {};

const Footer: React.FC<Props> = (props: Props) => {
	return (
		<div className="w-full h-24 py-4 flex flex-col justify-center items-center">
			<p className="w-fit text-sm dark:text-gray-400 text-gray-500">Created by Dan Michell</p>
			<LinksReduced />
		</div>
	);
};

export default Footer;
