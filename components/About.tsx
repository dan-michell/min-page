import React from "react";

type Props = {};

const About: React.FC<Props> = (props: Props) => {
  return (
    <div id="about" className="w-[90%] sm:w-auto mt-8">
      <h1 className="sm:text-2xl text-xl font-bold border-b-2 w-fit mb-2">
        About
      </h1>
      <p className="font-light text-justify">
        Thank you for taking the time to look at my website! I'm Dan, a junior
        fullstack software engineer based near London. Having recently entered
        the world of Software Development from a background in Mechanical
        Engineering I have naturally taken to the problem solving and logical
        aspect that coding offers.
        <br />
        <br />
        Upon completing the 3 month training program @{" "}
        <span
          className="font-semibold hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          <a href="https://www.sigmalabs.co.uk/" className="">
            Sigma Labs
          </a>
        </span>{" "}
        I have had experience with a variety of technologies to facilitate
        full-stack development along with working as part of an agile team. I am
        extremely excited to put these into practice in industry and also expand
        my knowledge into the vast world of exciting technologies to come up
        with creative and innovative solutions to problems.
      </p>
    </div>
  );
};

export default About;
