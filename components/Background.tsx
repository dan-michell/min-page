import React from "react";

type Props = {
  children: React.ReactNode;
};

const Background: React.FC<Props> = ({ children }: Props) => {
  return (
    <body className="bg-white dark:bg-black transition-all">{children}</body>
  );
};

export default Background;
