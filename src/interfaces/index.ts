export interface Team {
	id: string;
	teamName: string;
	color: string;
	imageUrl: string;
	points: number;
	wins: number;
	defeats: number;
	createdAt: string;
	updatedAt: string;
}

export interface Match {
	id: string;
	date: string;
	time: string;
	teamA: Team;
	teamB: Team;
}
