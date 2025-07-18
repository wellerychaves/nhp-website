import type { Team } from "../interfaces";

interface TeamScheduleProps {
	team: Team;
}

const TeamSchedule = ({ team }: TeamScheduleProps) => {
	return (
		<div className="flex flex-col w-36 items-center gap-2 p-2 h-fit">
			<img
				className="rounded-full bg-slate-950 w-16 h-16 md:w-20 md:h-20"
				src={team.imageUrl}
			/>
			<p className="text-lg">{team.teamName}</p>
		</div>
	);
};

export default TeamSchedule;
