import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

type Props = {};

const ThemeChanger: React.FC<Props> = (props: Props) => {
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
				<motion.div
					animate={{ rotate: 180 }}
					transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
				>
					<MdOutlineLightMode size={22} />
				</motion.div>
			);
		} else {
			return (
				<motion.div transition={{ duration: 0.3, type: "spring", stiffness: 100 }}>
					<MdOutlineDarkMode size={22} />
				</motion.div>
			);
		}
	};

	return (
		<button
			className={
				"p-2 rounded-xl bg-darkish text-lightish dark:text-darkish dark:bg-orange-300 hover:bg-darkish-highlight hover:dark:bg-orange-200 h-10 w-10 flex justify-center items-center"
			}
			onClick={() => {
				setTheme(theme == "dark" ? "light" : "dark");
			}}
		>
			{renderThemeChanger()}
		</button>
	);
};

export default ThemeChanger;
