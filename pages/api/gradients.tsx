import { GRADIENTS } from '@jsons/gradients';
import type { NextApiRequest, NextApiResponse } from 'next'
import { GradientsJSON } from '@interfaces';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<GradientsJSON>
) {
  res.status(200).json(GRADIENTS
    .map(gradient => ({
      [gradient.id]: {
        colors: gradient.colors,
        title: gradient.title
      }}))
    .reduce((firstGradient, secondGradient) => ({
      ...firstGradient, ...secondGradient
    }))
  );
}