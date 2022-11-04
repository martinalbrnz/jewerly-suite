import type { NextApiRequest, NextApiResponse } from "next";

import { ApiResponse } from "../../../../constants/customTypes";
import dbConnect from "../../../../lib/db";
import Movement from "../../../../models/movement";

const totalAmount = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  try {
    await dbConnect();

    const sum = await Movement.aggregate([{ $group: { _id: null, amount: { $sum: "$amount" } } }])

    return res
      .status(200)
      .json({
        msg: 'Total amount',
        data: sum[0].amount,
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
