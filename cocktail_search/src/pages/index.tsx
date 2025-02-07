import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react"; // ★ 追加：メニューの開閉状態を管理
import Nav from "@/components/nav"; // ★ 追加：ハンバーガーメニューをインポート
import "@/styles/main.css";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

              {/* ★ コンテンツを別の `content` コンテナで囲む */}
              <div className="button-container">
              <button className="pgmove" onClick={() => router.push("/clist")}>cocktail list</button>
              <button className="pgmove" onClick={() => router.push("/csearch")}>cocktail search</button>
              <button className="pgmove" onClick={() => router.push("/cadd")}>cocktail add</button>
                  <button className="pgmove" onClick={() => router.push("/fsearch")}>food search</button>
              <button className="pgmove" onClick={() => router.push("/fadd")}>food add</button>
              </div>
              <div>
              <button className="history" onClick={() => router.push("/history")}>history</button>
              </div>
          </div>
      </>
  );
}