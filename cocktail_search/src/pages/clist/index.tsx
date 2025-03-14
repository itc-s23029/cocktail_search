import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react"; // ★ 追加：メニューの開閉状態を管理
import Nav from "../../components/nav"; // ★ 追加：ハンバーガーメニューをインポート
import Link from "next/link";

export default function Clist() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ボタンのラベルリスト（20個）
    const buttonLabels = [
        { name :"カシスモーメント", path : "kasisu" },
        { name :"ソルティドッグ", path : "sotu" },
        { name :"モヒート", path : "moho" },
        { name :"ホワイトレディ", path : "howaito" },
        { name :"カルーアミルク", path : "karua" },
        { name :"ギムレット", path : "gimu" },
        { name :"マンハッタン", path : "man" },
        { name : "アレキサンダー", path: "areki" }
    ];

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
                    <h1 className="title">Cocktail List</h1>
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
                    {buttonLabels.map((label, index) => (
                        <button
                            key={index}
                            className="cocktail-button"
                            onClick={() => router.push(label.path)}>
                            <img
                                src={label.name === "カシスモーメント"　? "/unnamed.jpg" : "/cockpic.jpg"}
                                alt="icon"
                                className="button-icon"
                            />
                            <span className="button-text">{label.name}</span>

                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}