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
    <div className="w-[80%] my-4 max-w-2xl flex justify-between items-center">
      <div className="flex items-center">
        <GoTerminal size={32} />
        <span className="text-lg ml-2 font-mono">dan_michell</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="sm:flex items-center gap-3 hidden">
          <button className="hover:scale-110 transition-all duration-200">
            About
          </button>
          <button className="hover:scale-110 transition-all duration-200">
            Work
          </button>
        </div>
        <div
          className="p-[12px] border-[1px] rounded-xl sm:hidden block"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          <FiMenu size={18} />
          <div
            className={`absolute right-[60px] h-10 w-52 ${
              dropdown ? "border-2" : "hidden"
            }`}
          ></div>
        </div>
        <button
          className={
            "p-2 rounded-xl bg-slate-800 text-gray-200 dark:bg-orange-300 dark:text-gray-900"
          }
        >
          {renderThemeChanger()}
        </button>
      </div>
    </div>
  );
};

export default Header;
