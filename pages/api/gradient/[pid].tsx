import type { NextApiRequest, NextApiResponse } from "next";

import gradients from "@jsons/gradients";

import { GradientScheme } from "@interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GradientScheme | string>
) {
  const pid = req.query.pid as string;

  if (pid in gradients) res.status(200).json(gradients[pid]);
  else res.status(404).send(`PID Not Found: ${pid}`);
}
