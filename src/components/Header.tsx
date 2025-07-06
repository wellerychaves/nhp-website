import { Link } from "@tanstack/react-router";
import nhpLogo from "../assets/nhp-logo.png";

const Header = () => {
	return (
		<>
			<header className="fixed left-1/2 mt-4 flex h-20 max-w-96 -translate-x-1/2 transform items-center justify-center rounded-full border-2 border-purple-700 bg-gray-950 px-4 text-base font-medium text-gray-50 shadow-2xl select-none">
				<nav className="flex w-full items-center justify-between">
					<Link to="/">
						<img src={nhpLogo} alt="nhp logo" className="h-14 w-14" />
					</Link>
					<div className="space-x-3">{/* <Link to="/about">About</Link> */}</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
