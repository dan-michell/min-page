import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

type Props = {};

const Links: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex gap-5 mt-2">
      <a
        href="https://www.linkedin.com/in/dan-michell/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin size={18} className="hover:scale-110 transition-all" />
      </a>
      <a href="https://github.com/dan-michell" target="_blank" rel="noreferrer">
        <BsGithub size={18} className="hover:scale-110 transition-all" />
      </a>
    </div>
  );
};

export default Links;
