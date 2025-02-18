import {useRouter} from "next/navigation";
import {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/nav";

export default function Cadd() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ボタンのラベルリスト（20個）
    const buttonLabels = [
        "カクテル1", "カクテル2", "カクテル3", "カクテル4", "カクテル5",
        "カクテル6", "カクテル7", "カクテル8", "カクテル9", "カクテル10",
        "カクテル11", "カクテル12", "カクテル13", "カクテル14", "カクテル15",
        "カクテル16", "カクテル17", "カクテル18", "カクテル19", "カクテル20"
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
                    <h1 className="title">Cocktail Add</h1>
                </div>

                {/* ハンバーガーメニュー */}
                <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
                    <Nav />
                </div>

                {/* カラーラベルの下に白い空間を作成 */}
                <div className="form-wrapper">
                    <h2>カクテル情報を追加</h2>

                    <div className="form-container">
                        {/* 左側の入力フィールド */}
                        <div className="form-left">
                            <label>Name:
                                <input type="text" name="name" className="input-field"/>
                            </label>
                            <label>Combination:
                                <input type="text" name="combination" className="input-field"/>
                            </label>
                            <label>Tag:
                                <input type="text" name="tag" className="input-field"/>
                            </label>
                            <label>Material:
                                <input type="text" name="material" className="input-field"/>
                            </label>
                        </div>

                        {/* 右側の入力フィールド */}
                        <div className="form-right">
                            <label>How To Make:
                                <textarea name="howToMake" className="input-textarea"></textarea>
                            </label>
                        </div>
                    </div>

                    {/* 送信ボタン */}
                    <div className="submit-container">
                        <button type="submit" className="submit-btn">追加</button>
                    </div>
                </div>

                {/* スクロール可能なボタン一覧 */}
                <div className="Add-2line">
                    {buttonLabels.map((label, index) => (
                        <button key={index} className="Add-button" onClick={() => router.push("/")}>
                            <span className="Add-text">{label}</span>

                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}