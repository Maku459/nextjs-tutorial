import { NextApiRequest, NextApiResponse } from 'next'
// req = リクエストデータ, res = レスポンスデータ
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}