import {useState, useEffect} from "react";

interface Cocktail {
    cocktail_id: number;
    cocktail_name: string;
    base_name: string;
    taste_name: string;
}

export default function Clist() {
    const [ data, setData ] = useState<Cocktail[]>([]);
    const [ error, setError ] = useState<string | null >(null);

    useEffect(() => {
        fetch("https://cocktail-f.com/api/v1/cocktails")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    setError("データの形式が正しくありません");
                }
            })
            .catch((err) => setError(String(err.message)));
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">カクテル一覧</h1>

            {error && <p className="text-red-500">エラー: {error}</p> }
            {data.length === 0 ? (
                <p className="mt-4">カクテルが見つかりません</p>
            ) : (
                <ul className="mt-4">
                    {data.map((cocktail, index) => (
                        <li key={index} className="border p-2 mb-2">
                            <strong>{cocktail.cocktail_name}</strong> - {cocktail.base_name} / {cocktail.taste_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}