import type { NextApiRequest, NextApiResponse } from "next";

import { ApiResponse } from "../../../../constants/customTypes";
import dbConnect from "../../../../lib/db";
import Movement from "../../../../models/movement";
import Account from "../../../../models/account";

const totalAmount = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await dbConnect();

		const sum = await Movement.aggregate([{ $group: { _id: "$account", amount: { $sum: "$amount" } } }])
		const accs = await Account.find()

		const data = sum.map((item) => {
			const account = accs.find((acc) => {
				return acc._id.toString() === item._id.toString()
			})
			return {
				...item,
				name: account?.name
			}
		})

		return res
			.status(200)
			.json({
				msg: 'Total amount',
				data,
				error: false
			})

	} catch (error) {
		return res
			.status(400)
			.json({
				msg: 'There has been an error!',
				data: error,
				error: true
			});
	}
}

export default totalAmount;
