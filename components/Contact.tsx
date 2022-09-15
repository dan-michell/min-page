import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id="contact" className="w-[90%] sm:w-auto mt-12 flex flex-col">
      <h1 className="sm:text-2xl text-xl font-bold border-b-2 w-fit mb-2">
        Contact
      </h1>
      <p className="font-light text-justify">Send me a message!</p>
    </div>
  );
};

export default Contact;
