import type { NextApiRequest, NextApiResponse } from 'next'

import getGradientById from '@utils/getGradientById';

import { GradientScheme } from '@interfaces';

// interface ResponseJSON {
//   colors: GradientHue
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(getGradientById(req.query.pid));
}