import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GoTerminal } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
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
            size={22}
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
            size={22}
            onClick={() => {
              setTheme("dark");
            }}
          />
        </motion.div>
      );
    }
  };
  return (
    <div className="sm:w-[80%] w-full px-4 sm:px-0 my-4 max-w-2xl flex justify-between items-center">
      <div className="flex items-center">
        <GoTerminal size={32} />
        <span className="text-lg ml-2 font-mono font-semibold">
          dan_michell
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="sm:flex items-center gap-4 hidden">
          <button className="hover:scale-110 text-sm transition-all duration-200">
            About
          </button>
          <button className="hover:scale-110 text-sm transition-all duration-200">
            Work
          </button>
          <button className="hover:scale-110 text-sm transition-all duration-200">
            Contact
          </button>
          <button className="hover:scale-110 text-sm transition-all duration-200">
            <a
              className="flex gap-1 items-center"
              href="https://github.com/dan-michell/min-page"
              target="_blank"
              rel="noreferrer"
            >
              Source
              <AiFillGithub size={22} />
            </a>
          </button>
        </div>
        <div className="flex justify-center sm:hidden">
          <div>
            <div className="relative">
              <button
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                // onBlur={() => {
                //   setDropdown(false);
                // }}
                className="p-[11px] border-[1px] dark:border-gray-700 rounded-xl hover:dark:bg-gray-800 hover:bg-gray-100"
              >
                <FiMenu size={16} />
              </button>
              <ul
                className={`absolute ${
                  dropdown ? "" : "hidden"
                } py-2 border-[1px] dark:border-gray-700 list-none rounded-lg shadow-lg mt-2 left-[-90px] w-48 dark:bg-gray-900`}
              >
                <li>
                  <button className="text-sm  px-6 w-full hover:scale-110 transition-all duration-200">
                    About
                  </button>
                </li>
                <li>
                  <button className="text-sm px-6 mt-3 w-full hover:scale-110 transition-all duration-200">
                    Work
                  </button>
                </li>
                <li>
                  <button className="text-sm px-6 mt-3 w-full hover:scale-110 transition-all duration-200">
                    Contact
                  </button>
                </li>
                <li>
                  <button className="text-sm px-6 mt-3 w-full flex justify-center hover:scale-110 transition-all duration-200">
                    <a
                      className="flex gap-1 items-center"
                      href="https://github.com/dan-michell/min-page"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                      <AiFillGithub size={22} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          className={
            "p-2 rounded-xl bg-slate-800 text-gray-200 dark:bg-orange-300 dark:text-gray-900 hover:bg-slate-900 hover:dark:bg-orange-200"
          }
        >
          {renderThemeChanger()}
        </button>
      </div>
    </div>
  );
};

export default Header;
