import React from "react";

type Props = {};

const About: React.FC<Props> = (props: Props) => {
  return (
    <div id="about" className="w-[90%] sm:w-auto mt-8 flex flex-col">
      {/* <h1 className="sm:text-2xl text-xl font-bold border-b-2 w-fit mb-2">
        About
      </h1> */}
      <p className="font-light text-justify">
        Thank you for taking the time to look at my website! I'm Dan, a junior
        fullstack software engineer based near London. Having recently entered
        the world of Software Development from a background in Mechanical
        Engineering I have naturally taken to the problem solving and logical
        aspect that coding offers.
        {/* Add profile pic */}
      </p>
    </div>
  );
};

export default About;
