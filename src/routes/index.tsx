import { createFileRoute } from "@tanstack/react-router";
import HomeTable from "../components/HomeTable";
import Schedule from "../components/Schedule";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col gap-4 md:flex-row">
				<HomeTable />
				<Schedule />
			</div>
		</div>
	);
}

export default HomePage;
/* function HomePage() {
	return (
		<main>
			<H1>
				New Horizon Project!
			</H1>
			<div className="flex justify-between flex-col md:flex-row">
				<div className="max-w-[816px] mb-8">
					<p>
						Welcome to the New Horizon Project website! Here you can find almost all the
						tools <span className="text-purple-50/50">(soon™)</span> you need related
						with Need For Speed World
					</p>
				</div>
				<aside className="flex flex-col gap-8">
					<HomeTable />
					<Schedule />
				</aside>
			</div>
		</main>
	);
} */
