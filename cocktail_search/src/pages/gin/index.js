import Head from "next/head";
import Link from "next/link";

export default function Gin() {
    return (
        <>
            <Head>
                <title>ジントニック</title>
                <meta name="description" content="ジントニックの説明とレシピ" />
            </Head>

            <div className="gin-page">
                <h1>ジントニック</h1>
                <p>ジントニックはジンとトニックウォーターを組み合わせたシンプルで爽快なカクテルです。</p>
                <p>材料: ジン, トニックウォーター, ライム</p>
                <p>作り方: グラスに氷を入れ、ジンとトニックウォーターを注ぎ、ライムを加えます。</p>
                <Link href="/caadd">カクテル追加画面に戻る</Link>
            </div>
        </>
    );
}
