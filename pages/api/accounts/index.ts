import type { NextApiRequest, NextApiResponse } from "next";

import { ApiResponse } from "../../../constants/customTypes";
import dbConnect from "../../../lib/db";
import Account from "../../../models/account";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  if (req.method === 'GET') {
    return getAccounts(req, res);
  }
  if (req.method === 'POST') {
    return addAccount(req, res);
  }
}

const getAccounts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await Account.find();

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

const addAccount = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  try {
    const account = new Account({
      name: req.body.name,
    });
    console.log(account);
    const data = await account.save();

    return res
      .status(201)
      .json({
        msg: 'Account created',
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
