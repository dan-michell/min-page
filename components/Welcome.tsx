import React, { useState } from "react";
import Links from "./Links";

type Props = {};

const Welcome: React.FC<Props> = (props: Props) => {
  const [wave, setWave] = useState(false);

  return (
    <div className="mt-8">
      <div
        className={`animate-wave text-7xl w-20 origin-bottom-right absolute right-[145px] top-[66px] ${
          wave
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 transition-opacity duration-700"
        }`}
      >
        👋
      </div>
      <h1
        onMouseEnter={(e) => {
          setWave(true);
        }}
        onMouseLeave={(e) => {
          setWave(false);
        }}
        className="font-semibold sm:text-9xl text-8xl"
      >
        Hello!
      </h1>
      <h1 className="font-semibold sm:text-9xl text-8xl">I'm Dan.</h1>
      <h3 className="font-extralight sm:text-2xl text-xl flex flex-wrap text-left sm:w-auto">
        Fullstack Software / Data Engineer with a <br />
        passion for learning and problem solving.
      </h3>
      <Links />
    </div>
  );
};

export default Welcome;
