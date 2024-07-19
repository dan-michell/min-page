import React from "react";

type Props = {};

const FeaturedPosts: React.FC<Props> = (props: Props) => {
	return (
		<div className="w-[90%] border-2 flex flex-col">
			<h3 className="font-semibold">Featured Posts</h3>
			<div>------FEATURED POSTS-------</div>
		</div>
	);
};

export default FeaturedPosts;
