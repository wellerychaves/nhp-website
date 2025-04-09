const Header = () => {
	return (
		<div className="@container -translate-x-1/2 fixed left-1/2 mt-8 flex h-20 w-96 transform select-none items-center justify-center rounded-full border-2 border-violet-950 bg-gray-950 px-4 font-medium text-base text-gray-50 shadow-2xl">
			<nav className="flex w-full items-center justify-between">
				<a href="/">
					<img
						src="/nhp-logo.png"
						alt="nhp logo"
						className="h-14 w-14"
					/>
				</a>
				<a href="/blog">Blog</a>
				<a href="/setups">Setups</a>
				<a href="/tracks">Tracks</a>
			</nav>
		</div>
	);
};

export default Header;
