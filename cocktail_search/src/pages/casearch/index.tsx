import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Nav from "../../components/nav";

const ginCocktails = [
    { name: "ジントニック", path: "/gin" },
    { name: "ジンバック", path: "/ginpuck" },
    { name: "ジンライム", path: "/ginlime" },
    { name: "ジンフィズ", path: "/ginfizz" },
    { name: "フレンチ75", path: "/french75" },
    { name: "ピンクレディ", path: "/pinklady" }
];

export default function Casearch() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <title>ジンのカクテル一覧</title>
                <meta name="description" content="ジンを使ったカクテルの一覧" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="p-fv">
                <div className="color-label">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <h1 className="title">Cocktail Search</h1>
                </div>

                {/* ハンバーガーメニュー */}
                <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
                    <Nav />
                </div>

                {/* スクロール可能なボタン一覧 */}
                <div className="button-2line">
                    {ginCocktails.map((cocktail, index) => (
                        <Link href={cocktail.path} key={index}>
                            <button className="cocktail-button">
                                <img src="/cockpic.jpg" alt="icon" className="button-icon" />
                                <span className="button-text">{cocktail.name}</span>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
