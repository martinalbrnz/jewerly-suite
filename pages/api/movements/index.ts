import type { NextApiRequest, NextApiResponse } from "next";

import { ApiResponse } from "../../../constants/customTypes";
import dbConnect from "../../../lib/db";
import Movement from "../../../models/movement";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  if (req.method === 'GET') {
    return await getMovements(req, res);
  }
  if (req.method === 'POST') {
    return await addMovement(req, res);
  }
}

const getMovements = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await Movement
      .find({ isDeleted: { $ne: true } })
      .skip((Number(req.query.page) - 1) * Number(req.query.take))
      .limit(Number(req.query.take))
      .populate('account', { _id: 0, name: 1 });
    const max = await Movement.countDocuments();

    if (data.length === 0) {
      return res
        .status(201)
        .json({
          msg: 'No data found',
          data: [],
          error: false,
        });
    }

    return res
      .status(200)
      .json({
        msg: 'Fetched data',
        data,
        max, 
        error: false
      });
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

const addMovement = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  try {
    console.log(req.body)
    const movement = new Movement({
      date: req.body.date ? new Date(req.body.date) : new Date(Date.now()),
      amount: req.body.amount,
      account: req.body.account,
      description: req.body.description,
      isDeleted: req.body.isDeleted
    });
    // console.log(movement);
    const data = await movement.save();

    return res
      .status(201)
      .json({
        msg: 'Movement created',
        data,
        error: false
      });
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

export default handler;
