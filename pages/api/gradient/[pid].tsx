import type { NextApiRequest, NextApiResponse } from 'next'

import getGradientById from '@utils/getGradientById';

import { GradientScheme } from '@interfaces';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GradientScheme>
) {
  res.status(200).json(getGradientById(req.query.pid));
}