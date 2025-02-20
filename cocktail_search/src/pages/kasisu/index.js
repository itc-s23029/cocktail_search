import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Gin() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <title>カシスモーメント</title>
                <meta name="description" content="カシスモーメントの説明とレシピ" />
            </Head>

            <div className="p-fv">
                <div className="color-label">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <h1 className="title">カクテル詳細</h1>
                </div>

                {/* ハンバーガーメニュー */}
                <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
                </div>
            </div>

            <div className="white-banner" style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "40px 20px",
                borderRadius: "8px",
                position: "relative",
                zIndex: "10",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                height: "800px",
                width: "100%",
                marginTop: "60px",
                boxSizing: "border-box",
            }}>
                {/* 左上に配置するカクテル画像 */}
                <img src="/unnamed.jpg" alt="cocktail icon" style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    width: "300px",
                    height: "300px",
                }} />

                {/* バナーの一番上にジントニックのタイトルを配置し、下線を引く */}
                <h1 style={{
                    position: "absolute",
                    top: "20px",
                    left: "350px",
                    textDecoration: "underline",
                    fontSize: "57px",
                    margin: "0",
                }}>カシスモーメント</h1>

                {/* 説明文は画像の下に配置 */}
                <div style={{
                    position: "absolute",
                    top: "120px",
                    left: "350px",
                    width: "calc(100% - 350px)",
                    padding: "20px",
                    boxSizing: "border-box",
                }}>
                    <p style={{
                        fontSize: "2.5rem",
                    }}>
                    </p>
                </div>

                {/* 材料と作り方をバナーの下部に配置 */}
                <div style={{
                    position: "absolute",
                    bottom: "300px", // バナーの底から少し上に配置
                    left: "50px",
                    width: "calc(100% - 350px)",
                    padding: "20px",
                    boxSizing: "border-box",
                    fontSize: "40px", // フォントを大きく
                }}>
                    <p><strong>材料:</strong></p>
                    <p><strong>作り方:カシスを使ったカクテル</strong></p>
                </div>
            </div>

            <div className="kasisu-page" style={{ position: "relative", zIndex: "5", textAlign: "center" }}>
                <Link href="/caadd">カクテル追加画面に戻る</Link>
            </div>
        </>
    );
}
