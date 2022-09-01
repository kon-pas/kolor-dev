import { GRADIENTS } from '@jsons/gradients';
import type { NextApiRequest, NextApiResponse } from 'next'
import { GradientScheme } from '@interfaces';

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({GRADIENTS});
}