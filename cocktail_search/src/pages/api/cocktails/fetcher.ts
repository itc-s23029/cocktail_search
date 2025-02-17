const fetcher = async (url: string) => {
    console.log("API リクエスト送信:", url);

    const res = await fetch(url);
    const result = await res.json();

    console.log("API レスポンス:", result);

    if (!res.ok) {
        throw new Error(`HTTPエラー: ${res.status} ${res.statusText}`);
    }
    return result.cocktails || [];
}

export default { fetcher };