import React, { useState } from "react";
import Links from "./Links";

type Props = {};

const Welcome: React.FC<Props> = (props: Props) => {
  const [wave, setWave] = useState(false);

  return (
    <div className="my-8 w-[90%] sm:w-auto">
      <h1 className="font-semibold sm:text-9xl text-8xl">
        Hello! <br /> I'm Dan.
      </h1>
      <h3 className="font-extralight sm:text-2xl text-xl flex flex-wrap text-left sm:w-auto">
        Junior Software / Data Engineer.
      </h3>
      <Links />
    </div>
  );
};

export default Welcome;
