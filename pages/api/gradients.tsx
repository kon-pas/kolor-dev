import type { NextApiRequest, NextApiResponse } from 'next'
import { gradients } from '@jsons/gradients';
import { GradientsJSON } from '@interfaces';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<GradientsJSON>
) {
  res
    .status(200)
    .json(gradients
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