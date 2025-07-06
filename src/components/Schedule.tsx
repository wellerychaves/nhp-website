import { useQuery } from "@tanstack/react-query";
import { backendUrl } from "../config/enviroment";
import TeamSchedule from "../fragments/TeamSchedule";
import type { Match } from "../interfaces";

const Schedule = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ["matches"],
		queryFn: () => fetch(`${backendUrl}/matches`).then((res) => res.json()),
	});

	const matches: Match[] = data?.matches || [];
	const hasMatches = matches.length > 0;

	return (
		<div>
			<p className="text-center text-2xl pb-2">Schedule</p>
			<div className="scheduleDiv w-[336px] max-h-96 bg-zinc-900 divide-y overflow-y-scroll scrollbar-hide shadow-lg/50 divide-purple-700 overflow-hidden rounded-lg select-none">
				<div className="bg-purple-700 h-12 flex justify-center items-center text-lg font-semibold font-(family-name:Montserrat)">
					<span>Next matches</span>
				</div>
				{isPending ? (
					<p className="pl-4 py-4 text-left text-base text-blue-400">
						Loading matches...
					</p>
				) : error ? (
					<p className="pl-4 py-4 text-red-400">Error loading matches: {error.message}</p>
				) : hasMatches ? (
					matches.map((item, index) => (
						<div key={index} className="flex flex-col items-center">
							<p className="mt-2 font-[montserrat]">{`${item.date} - ${item.time}`}</p>
							<div className="flex justify-around items-center">
								<TeamSchedule team={item.teamA} />
								<p className="text-xl p-4 font-medium">X</p>
								<TeamSchedule team={item.teamB} />
							</div>
						</div>
					))
				) : (
					<div className="p-4 text-center text-orange-400">
						Nenhuma partida encontrada
					</div>
				)}
			</div>
		</div>
	);
};

export default Schedule;
