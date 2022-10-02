import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id="contact" className="w-[90%] sm:w-auto mt-12 flex flex-col">
      <h1 className="sm:text-2xl text-xl font-bold border-b-2 w-fit mb-2">
        Contact
      </h1>
      <div className="flex items-center justify-center gap-5 mt-2">
        <a
          href="https://www.linkedin.com/in/dan-michell/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={34} className="hover:scale-110 transition-all" />
        </a>
        <a
          href="mailto: dan.michell1000@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GoMail size={44} className="hover:scale-110 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
