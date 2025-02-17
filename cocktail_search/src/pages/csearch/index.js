import Head from "next/head";
import { useState } from "react"; // ✅ useState を React からインポート
import { useRouter } from "next/router";
import Link from "next/link";
import Nav from "../../components/nav";

export default function Search() {
    const router = useRouter(); // ✅ Next.js のルーターを取得
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ useState でメニューの開閉を管理

    return (
        <>
            <Head>
                <title>Cocktail App</title>
                <meta name="description" content="A cocktail app to explore, search, and add new cocktails"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="p-fv">
                <div className="color-label">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <h1 className="title">Cocktail Search</h1>
                </div>

                {/* ★ ハンバーガーメニューのボタン */}
                <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>

                {/* ★ メニューの表示・非表示を `isMenuOpen` で制御 */}
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
                    <Nav />
                </div>

                {/* ★ コンテンツを別の `content` コンテナで囲む */}
                {/* 実行先未指定*/}
                <div className="button-container">
                    <button className="searchbt" onClick={() => router.push("/")}>ベース</button>
                    <button className="searchbt" onClick={() => router.push("/")}>技法</button>
                    <button className="searchbt" onClick={() => router.push("/")}>味</button>
                    <button className="searchbt" onClick={() => router.push("/")}>タグ</button>
                    <div className="haiti">
                        <input type="text" className="search-box" placeholder="カクテルを検索..." /><button className="enterbt">検索</button>
                    </div>
                    <div className="listhaiti">
                        <button className="pgmove" onClick={() => router.push("/clist")}>cocktail list</button>
                    </div>
                </div>
            </div>
        </>
    );
}