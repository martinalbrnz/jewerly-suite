import type { NextApiRequest, NextApiResponse } from "next";

import { ApiResponse } from "../../../constants/customTypes";
import dbConnect from "../../../lib/db";
import Movement from "../../../models/movement";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return getMovementById(req, res);
  }
  if (req.method === 'PUT') {
    return editMovement(req, res);
  }
  if (req.method === 'PATCH') {
    return deleteMovement(req, res);
  }
}

const getMovementById = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  try {
    await dbConnect();
    const data = await Movement.findById(req.query.id);

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

const editMovement = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res
        .status(404)
        .json({
          msg: 'Please provide an id',
          data: {},
          error: true,
        });
    }

    await dbConnect();
    const updatedMovement = await Movement.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedMovement) {
      return res
        .status(404)
        .json({
          msg: `Movement with id: ${id} not found`,
          data: {},
          error: true
        });
    }

    return res
      .status(202)
      .json({
        msg: `Movement with id: ${id} has been edited`,
        data: updatedMovement,
        error: false,
      });

  } catch (error) {
    return res
      .status(400)
      .json({
        msg: 'There has been an error!',
        data: error,
        error: true,
      });
  }
}

const deleteMovement = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res
        .status(404)
        .json({
          msg: 'Please provide an id',
          data: {},
          error: true,
        });
    }
    await dbConnect();
    const deletedMovement = await Movement.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

    if (!deletedMovement) {
      return res
        .status(404)
        .json({
          msg: 'Movement not found',
          data: {},
          error: true
        });
    }

    return res
      .status(202)
      .json({
        msg: `Movement with id: ${id} has been deleted`,
        data: deletedMovement,
        error: false,
      });

  } catch (error) {
    return res
      .status(400)
      .json({
        msg: 'There has been an error!',
        data: error,
        error: true,
      });
  }
}

export default handler;
