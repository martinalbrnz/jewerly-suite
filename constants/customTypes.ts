export interface ApiResponse {
	msg: string;
	data: any[] | object | unknown;
	error: boolean;
}

export interface Movement {
	_id: string;
	date: Date;
	amount: number;
	account: Account;
	description: string;
	isDeleted: boolean;
}

export interface Account {
	_id: string;
	name: string;
}