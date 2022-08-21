import React from "react";
import Toggle from "./ThemeToggle";

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  return (
    <div>
      Header <Toggle />
    </div>
  );
};

export default Header;
