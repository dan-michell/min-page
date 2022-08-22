import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import { render } from "react-dom";

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) {
      return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BiSun
          size={48}
          className=" hover:scale-105 transition-all duration-200"
          onClick={() => {
            setTheme("light");
          }}
        />
      );
    } else {
      return (
        <BiMoon
          size={48}
          className=" hover:scale-105 transition-all duration-200"
          onClick={() => {
            setTheme("dark");
          }}
        />
      );
    }
  };
  return (
    <div className="w-[80%] border-2 flex justify-between">
      <h1>Header</h1>
      {renderThemeChanger()}
    </div>
  );
};

export default Header;
