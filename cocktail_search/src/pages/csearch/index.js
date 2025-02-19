import Head from "next/head";
import { useState } from "react"; // ✅ useState を React からインポート
import { useRouter } from "next/router"; // ✅ Next.js の useRouter をインポート
import Link from "next/link";
import Nav from "../../components/nav";

export default function Search() {
    const router = useRouter(); // ✅ Next.js のルーターを取得
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ useState でメニューの開閉を管理

    // ✅ 各ドロップダウンの状態を管理
    const [selectedBase, setSelectedBase] = useState("ベース");
    const [selectedTechnique, setSelectedTechnique] = useState("技法");
    const [selectedTaste, setSelectedTaste] = useState("味");
    const [selectedTag, setSelectedTag] = useState("タグ");

    const [isBaseOpen, setIsBaseOpen] = useState(false);
    const [isTechniqueOpen, setIsTechniqueOpen] = useState(false);
    const [isTasteOpen, setIsTasteOpen] = useState(false);
    const [isTagOpen, setIsTagOpen] = useState(false);

    // ✅ 各カテゴリの選択肢
    const baseOptions = ["ウォッカ", "ジン", "ラム", "テキーラ", "ウイスキー"];
    const techniqueOptions = ["シェイク", "ステア", "ビルド"];
    const tasteOptions = ["甘口", "中甘口", "中口", "中辛口","辛口"];
    const tagOptions = ["スタンダード", "オリジナル", "トロピカル", "エレガント","歴史ある"];

    // 検索ボタンがクリックされた時に /csearch に遷移する
    const handleSearch = () => {
        router.push("/casearch");
    };

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

                {/* ハンバーガーメニュー */}
                <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
                    <Nav />
                </div>

                {/* ドロップダウンボタン */}
                <div className="button-container">
                    {/* ベース */}
                    <div className="dropdown">
                        <button className="searchbt" onClick={() => setIsBaseOpen(!isBaseOpen)}>
                            {selectedBase}
                        </button>
                        {isBaseOpen && (
                            <ul className="dropdown-menu">
                                {baseOptions.map((option, index) => (
                                    <li key={index} onClick={() => { setSelectedBase(option); setIsBaseOpen(false); }}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* 技法 */}
                    <div className="dropdown">
                        <button className="searchbt" onClick={() => setIsTechniqueOpen(!isTechniqueOpen)}>
                            {selectedTechnique}
                        </button>
                        {isTechniqueOpen && (
                            <ul className="dropdown-menu">
                                {techniqueOptions.map((option, index) => (
                                    <li key={index} onClick={() => { setSelectedTechnique(option); setIsTechniqueOpen(false); }}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* 味 */}
                    <div className="dropdown">
                        <button className="searchbt" onClick={() => setIsTasteOpen(!isTasteOpen)}>
                            {selectedTaste}
                        </button>
                        {isTasteOpen && (
                            <ul className="dropdown-menu up">
                                {tasteOptions.map((option, index) => (
                                    <li key={index} onClick={() => { setSelectedTaste(option); setIsTasteOpen(false); }}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* タグ */}
                    <div className="dropdown">
                        <button className="searchbt" onClick={() => setIsTagOpen(!isTagOpen)}>
                            {selectedTag}
                        </button>
                        {isTagOpen && (
                            <ul className="dropdown-menu up">
                                {tagOptions.map((option, index) => (
                                    <li key={index} onClick={() => { setSelectedTag(option); setIsTagOpen(false); }}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* 検索ボックス */}
                    <div className="haiti">
                        <input type="text" className="search-box" placeholder="カクテルを検索..." />
                        <button className="enterbt" type="button" onClick={handleSearch}>検索</button>
                    </div>

                    {/* カクテルリストへのリンク */}
                    <div className="listhaiti">
                        <button className="pgmove" onClick={() => router.push("/clist")}>cocktail list</button>
                    </div>
                </div>
            </div>
        </>
    );
}
