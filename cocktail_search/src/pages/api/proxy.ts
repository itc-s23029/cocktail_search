import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get('https://cocktail-f.com/api/v1/base-options');
        res.status(200).json(response.data);
    } catch (error) {
        // `error`をログに出力する
        console.error(error);
        res.status(500).json({ error: 'API request failed' });
    }
}
