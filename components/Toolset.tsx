import React from "react";
import NoScrollLink from "./NoScrollLink";
import WorkCard from "./WorkCard";

type Props = {};

const Toolset: React.FC<Props> = (props: Props) => {
	return <div id="toolset" className="w-[90%] sm:w-auto mt-12 flex flex-col"></div>;
};

export default Toolset;
