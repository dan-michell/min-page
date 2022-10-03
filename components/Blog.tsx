import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div id="blog" className="w-[90%] sm:w-auto mt-12 flex flex-col">
      <h1 className="sm:text-2xl text-xl font-bold border-b-2 w-fit mb-2">
        Blog
      </h1>
      <p className=" text-red-500">In progress...</p>
    </div>
  );
};

export default Blog;
