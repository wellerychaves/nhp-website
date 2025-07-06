import { useQuery } from "@tanstack/react-query";
import { backendUrl } from "../config/enviroment";
import type { Team } from "../interfaces";

const HomeTable = () => {
	const { isPending, error, data } = useQuery({
		queryKey: ["teams"],
		queryFn: () => fetch(`${backendUrl}/teams`).then((res) => res.json()),
	});
	console.log({backendUrl})
	const teams: Team[] = data?.teams || [];
	const hasTeams = teams.length > 0;

	return (
		<div>
			<p className="text-center text-2xl pb-2">Ranking</p>
			<table className="min-w-[336px] flex w-fit h-fit border-collapse flex-col overflow-hidden rounded-lg shadow-lg/50 bg-zinc-900 text-center text-purple-50 select-none">
				<thead className="bg-purple-700 font-semibold">
					<tr>
						<th scope="col" className="w-14 py-3">
							Rank
						</th>
						<th scope="col" className="w-[184px] px-4 py-3 text-left">
							Equipe
						</th>
						<th scope="col" className="w-8 py-3">
							P
						</th>
						<th scope="col" className="w-8 py-3">
							W
						</th>
						<th scope="col" className="w-8 py-3">
							D
						</th>
					</tr>
				</thead>
				<tbody>
					{isPending ? (
						<tr>
							<td colSpan={5} className="pl-4 py-4 text-blue-400">
								Loading teams...
							</td>
						</tr>
					) : error ? (
						<tr>
							<td colSpan={5} className="pl-4 py-4 text-red-400">
								Error loading teams: {error.message}
							</td>
						</tr>
					) : hasTeams ? (
						teams.map((team, index) => (
							<tr key={index} className="hover:bg-zinc-950 ">
								<td className="w-14 py-2 font-bold">{index + 1}°</td>
								<td className="flex items-center w-[184px] px-4 py-2">
									{team.imageUrl && (
										<img
											src={team.imageUrl}
											alt={`${team.teamName} logo`}
											className="mr-3 h-6 w-6 rounded-full"
										/>
									)}
									{team.teamName}
								</td>
								<td className="w-8 py-2">{team.points}</td>
								<td className="w-8 py-2">{team.wins}</td>
								<td className="w-8 py-2">{team.defeats}</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={5} className="pl-4 py-4 text-center text-orange-400">
								No team was found
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default HomeTable;
