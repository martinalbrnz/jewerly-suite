export interface ApiResponse {
	msg: string;
	data: any[] | object | unknown;
	error: boolean;
}

export interface Movement {
	_id: string;
	date: Date;
	amount: number;
	account: number;
	description: string;
	isDeleted: boolean;
}