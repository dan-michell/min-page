import React from "react";

import HeaderLogo from "./HeaderLogo";
import ThemeChanger from "./ThemeChanger";
import HeaderDropdown from "./HeaderDropdown";
import HeaderPageLinks from "./HeaderPageLinks";

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
	return (
		<div className="w-full sm:max-w-[900px] px-4 py-3 flex justify-between items-center sticky top-0 z-50 backdrop-blur-lg border-b-[1px] dark:border-darkish-light border-lightlish-light">
			<HeaderLogo />
			<div className="flex items-center gap-4">
				<HeaderPageLinks />
				<HeaderDropdown />
				<ThemeChanger />
			</div>
		</div>
	);
};

export default Header;
