export interface ApiResponse {
	msg: string;
	data: any[] | object | unknown;
	error: boolean;
}