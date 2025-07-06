import discordLogo from "../assets/icons/discord-icon.svg";

const Footer = () => {
	const today = new Date();

	return (
		<>
			<footer className="border-t-2 w-full border-purple-700 mt-16 ">
				<div className="max-w-[1376px] flex justify-between items-center mx-auto py-3 px-1 md:px-4">
					<p className="text-center m-0 text-sm">
						&copy; {today.getFullYear()} New Horizon Project. All rights reserved.
					</p>
					<a href="https://discord.com/invite/cWeqVj7UzF" target="_blank">
						<img className="w-8" src={discordLogo} alt="Discord Logo" />
					</a>
				</div>
			</footer>
		</>
		/* 					
		<div className="mt-16 flex h-16 max-h-16 justify-center border-t-2 border-purple-600">
		</div>
		*/
	);
};

export default Footer;
