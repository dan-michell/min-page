import React from "react";
import NoScrollLink from "./NoScrollLink";
import WorkCard from "./WorkCard";

type Props = {};

const Work: React.FC<Props> = (props: Props) => {
  return (
    <div id="work" className="w-[90%] sm:w-auto mt-12 flex flex-col">
      <h1 className="sm:text-2xl text-xl font-bold border-b-2 w-fit mb-2">
        Work
      </h1>
      <p className="font-light text-justify">
        Currently working as a Data Engineer my focus is on creating and
        maintaining scalable and efficient data pipelines. Along with this I
        also enjoy the art of web design and applications of machine learning
        which can be seen from examples of my other projects.{" "}
      </p>
      <h3 className="sm:text-lg font-semibold text-md w-fit mt-6">
        Featured Projects
      </h3>
      <div className="flex justify-center mt-6">
        <WorkCard />
      </div>
      <NoScrollLink href="/work">
        <button className="bg-[#1cb955] self-center text-sm rounded-lg px-4 py-2 border-2 hover:scale-105 transition-all duration-200 dark:border-gray-800 mt-6">
          Further Examples
        </button>
      </NoScrollLink>
    </div>
  );
};

export default Work;
