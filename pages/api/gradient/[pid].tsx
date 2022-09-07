import type { NextApiRequest, NextApiResponse } from 'next'

import gradients from '@jsons/gradients';

import { GradientScheme } from '@interfaces';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GradientScheme>
) {
  const pid = req.query.pid;
  if(typeof pid === 'string') 
    res.status(200).json(gradients[pid]);
}