"use client";

import {useState} from "react";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import Nav from "@/components/nav";

type Cocktail = {
    cocktail_id: number;
    cocktail_name: string;
    cocktail_name_english: string;
    base_name: string;
    taste_name: string;
    tpo_name?: number;
    tags?: string[];
};

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTPエラー: ${res.status} ${res.statusText}`);
    }
    const result = await res.json();
    return result.cocktails || [];
};

export default function Home() {
    const [query, setQuery] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const requestUrl = query ? `/api/cocktails?word=${query}` : null;
    const { data, error } = useSWR(requestUrl, fetcher, {
        fallbackData: []
    });




    console.log("検索ワード:", query);
    console.log("リクエストURL:", requestUrl);
    console.log("取得データ:", data);
    console.log("エラー:", error);

    if (error) {
        console.error("SWRエラー:", error.message);
        return <div className="text-red-500">エラー: {error.message}</div>;
    }

    console.log("Homeコンポーネントがレンダリングされました")
    return (
        <div>
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
                    <h1 className="title">HOME</h1>
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
            </div>

            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">カクテル検索</h1>
                <input
                    type="text"
                    placeholder="カクテル名を入力"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border p-2 w-full mb-2 bg-white text-black border-2 border-red-500"
                />

                {error && <div className="text-red-500">エラー: {error.message}</div>}

                {!data ? (
                    <p className="mt-4">検索中...</p>
                ) : data.length === 0 ? (
                    <p className="mt-4">検索結果がありません</p>
                ) : (
                    <ul className="mt-4">
                        {data.map((cocktail: Cocktail) => (
                            <li key={cocktail.cocktail_id} className="border p-2 mb-2">
                                <strong>{cocktail.cocktail_name} ({cocktail.cocktail_name_english})</strong> - {cocktail.base_name} / {cocktail.taste_name}

                                <div>
                                {cocktail.tpo_name !== undefined && (
                                    <p>TPO: {cocktail.tpo_name || "データなし"}</p>
                                )}
                                {Array.isArray(cocktail.tags) && cocktail.tags.length > 0 ? (
                                    <p>タグ: {cocktail.tags.join(", ")}</p>
                                ) : (
                                    <p>タグ: なし</p>
                                )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}