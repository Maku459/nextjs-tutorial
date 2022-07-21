// req = リクエストデータ, res = レスポンスデータ
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}