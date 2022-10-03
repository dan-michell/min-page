import React, { useState } from "react";
import Links from "./Links";
import Image from "next/image";

type Props = {};

const Welcome: React.FC<Props> = (props: Props) => {
  const [wave, setWave] = useState(false);

  return (
    <div className="mt-8 w-[90%] sm:w-auto">
      <h1 className="font-semibold relative sm:text-9xl text-8xl">
        Hello! <br /> I'm Dan.
        {/* <div className="border-[1px] flex justify-center items-center top-[-40px] left-[275px] sm:top-[-20px] sm:left-[350px] rounded-full self-center my-6 absolute overflow-hidden -z-20">
          <Image
            src="/me.jpeg"
            width={125}
            height={125}
            alt="Dan Michell picture"
          />
        </div> */}
      </h1>
      <h3 className="font-extralight sm:text-2xl text-xl flex flex-wrap text-left sm:w-auto">
        Junior Software / Data Engineer.
      </h3>
      <Links />
    </div>
  );
};

export default Welcome;
