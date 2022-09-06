import type { NextApiRequest, NextApiResponse } from 'next'
import { gradients } from '@jsons/gradients';
import { GradientScheme } from '@interfaces';

// interface ResponseJSON {
//   colors: GradientHue
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(gradients.filter(gradient => gradient.id === req.query.pid))
  res.status(200).json({})
}