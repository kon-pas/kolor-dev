import type { NextApiRequest, NextApiResponse } from 'next'

interface Colors {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Colors>
) {
  console.log(req.query);
  switch(req.query.pid) {
    case 'colors': {
      const {from, via, to} = req.query;
      if(from && to) {
        if(via)
          res.status(200).json({});
        else
          res.status(200).json({});
      }
      else
        res.status(200);
    }
    case 'name':
      res.status(200);
    default:
      res.status(200);
  }
}