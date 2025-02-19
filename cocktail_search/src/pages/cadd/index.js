import { useRouter } from "next/navigation";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/nav";

export default function Cadd() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [image, setImage] = useState(null);

    // 画像選択時の処理
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result); // 画像をプレビュー表示
            };
            reader.readAsDataURL(file);
        }
    };

    // 画像削除処理
    const handleRemoveImage = () => {
        setImage(null);
    };

    // ボタンのラベルリスト（20個）
    const buttonLabels = [
        "ジントニック", "ジンパック", "ジンライム", "ジンフィズ", "フレンチ75",
        "ピンクレディ", "カクテル7", "カクテル8", "カクテル9", "カクテル10",
        "カクテル11", "カクテル12", "カクテル13", "カクテル14", "カクテル15",
        "カクテル16", "カクテル17", "カクテル18", "カクテル19", "カクテル20"
    ];

    // 追加ボタンを押した時に /caadd に遷移する
    const handleAddButtonClick = () => {
        router.push("/caadd");
    };

    // ボタンクリック処理
    const handleButtonClick = (label) => {
        if (label === "ジントニック") {
            router.push("/gin");
        } else {
            router.push("/");
        }
    };

    return (
        <>
            <Head>
                <title>Cocktail App</title>
                <meta name="description" content="A cocktail app to explore, search, and add new cocktails" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
                                <input type="text" name="name" className="input-field" />
                            </label>
                            {/* 画像アップロード */}
                            <div className="image-upload">
                                <label className="image-label">画像を選択:
                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                </label>

                                {/* 画像プレビュー */}
                                {image && (
                                    <div className="image-preview">
                                        <img src={image} alt="カクテル画像" className="preview-img" />
                                        <button className="remove-btn" onClick={handleRemoveImage}>削除</button>
                                    </div>
                                )}
                            </div>
                            <label>Tag:
                                <input type="text" name="tag" className="input-field" />
                            </label>
                            <label>Material:
                                <input type="text" name="material" className="input-field" />
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
                        <button type="submit" className="submit-btn" onClick={handleAddButtonClick}>追加</button>
                    </div>
                </div>

                {/* スクロール可能なボタン一覧 */}
                <div className="Add-2line">
                    {buttonLabels.map((label, index) => (
                        <button key={index} className="Add-button" onClick={() => handleButtonClick(label)}>
                            <span className="Add-text">{label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
