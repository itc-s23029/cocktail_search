import Head from "next/head";
import { useRouter } from "next/router"; // ✅ Next.js の useRouter をインポート
import Link from "next/link"; // ✅ Link を next/link からインポート

const ginCocktails = [
    "ジントニック",
    "ジンバック",
    "ジンライム",
    "ジンフィズ",
    "フレンチ75",
    "ピンクレディ"
];

export default function Casearch() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>ジンのカクテル一覧</title>
                <meta name="description" content="ジンを使ったカクテルの一覧" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="container">
                {/* ヘッダー */}
                <div className="header">
                    <Link href="/">
                        <div className="logo">Logo</div>
                    </Link>
                    <h1 className="title">ジンのカクテルリスト</h1>
                </div>

                {/* カクテルリスト */}
                <div className="cocktail-grid">
                    {ginCocktails.map((cocktail, index) => (
                        <div key={index} className="cocktail-item">
                            {cocktail}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .container {
                    text-align: center;
                    padding: 20px;
                    background-color: #f9f9f9;
                    min-height: 100vh;
                    background-size: cover;
                    background-position: center;
                }
                .header {
                    background-color: rgba(51, 51, 51, 0.8); /* 半透明の黒背景 */
                    padding: 20px;
                    color: white;
                }
                .logo {
                    font-size: 24px;
                    font-weight: bold;
                    cursor: pointer;
                }
                .title {
                    font-size: 28px;
                    margin-top: 10px;
                }
                .cocktail-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    max-height: 300px;
                    overflow-y: auto;
                    padding: 10px;
                    border: 1px solid #ddd;
                }
                .cocktail-item {
                    padding: 15px;
                    background: #f5f5f5;
                    border-radius: 8px;
                    text-align: center;
                    font-size: 18px;
                }
            `}</style>
        </>
    );
}