import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { word } = req.query;

    console.log("受け取った検索ワード:", word);

    if (!word || typeof word !== "string") {
        return res.status(400).json({ error: "パラメーター 'word' が必要です。　"});
    }

    const apiUrl = `http://cocktail-f.com/api/v1/cocktails?word=${encodeURIComponent(word)}`;

    try {
        const response = await fetch(apiUrl);
        console.log("APIへ送るURL:", apiUrl);

        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("取得したデータ:", data);

        res.status(200).json(data);
    } catch (error) {
        console.error("APIエラー:", error);
        res.status(500).json({ error: `APIリクエスト失敗: ${error}`});
    }
}