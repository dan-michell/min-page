import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GoTerminal } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { render } from "react-dom";
import { MotionConfig } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        >
          <MdOutlineLightMode
            size={28}
            onClick={() => {
              setTheme("light");
            }}
          />
        </motion.div>
      );
    } else {
      return (
        <motion.div
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        >
          <MdOutlineDarkMode
            size={28}
            onClick={() => {
              setTheme("dark");
            }}
          />
        </motion.div>
      );
    }
  };
  return (
    <div className="w-[80%] my-2 max-w-2xl flex justify-between items-center">
      <div className="flex items-center">
        <GoTerminal size={32} />
        <span className="text-lg ml-2 font-mono">dan_michell</span>
      </div>
      <div className="flex items-center gap-3">
        <p>About</p>
        <p>Work</p>
        <p>Source</p>
        <div className="p-1 border-[1px] rounded-xl">
          {renderThemeChanger()}
        </div>
        {/* <div
          className="p-1 border-[1px] rounded-xl"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          <FiMenu size={28} />
          <div
            className={`absolute right-[60px] h-10 w-52 ${
              dropdown ? "border-2" : "hidden"
            }`}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
