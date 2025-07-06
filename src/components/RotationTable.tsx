type Track = {
	class: string;
	gameMode: string;
	pu: boolean;
	trackId: number;
	trackName: string;
};

interface Props {
	tableData: Track[];
}

const RotationTable = () => {
	return (
		<div className="overflow-x-auto rounded-lg shadow-md">
			<table className="w-full border-collapse rounded-lg bg-gray-800 text-left text-sm text-gray-400">
				<thead className="bg-gray-700 text-xs text-gray-300 uppercase">
					<tr>
						<th scope="col" className="px-6 py-3">
							Track Name
						</th>
						<th scope="col" className="px-6 py-3">
							Class
						</th>
						<th scope="col" className="px-6 py-3">
							Game Mode
						</th>
						<th scope="col" className="px-6 py-3">
							PU
						</th>
						<th scope="col" className="px-6 py-3">
							Track ID
						</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((track) => (
						<tr className="border-b border-gray-700 bg-gray-900 hover:bg-gray-800">
							<td className="px-6 py-4 font-medium whitespace-nowrap text-white">
								{track.trackName}
							</td>
							<td className="px-6 py-4">{track.class}</td>
							<td className="px-6 py-4">{track.gameMode}</td>
							<td className="px-6 py-4">{track.pu ? "Yes" : "No"}</td>
							<td className="px-6 py-4">
								<a
									target="_blank"
									href={`https://panel.worldunited.gg/events/${track.trackId}`}
								>
									{track.trackId}
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RotationTable;

/* 

---
import "../styles/global.css";



const { tableData } = Astro.props;
---



*/
