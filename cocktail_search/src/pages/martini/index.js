import Head from "next/head";
import Link from "next/link";

export default function Martini() {
    return (
        <>
            <Head>
                <title>Martini - Cocktail App</title>
                <meta name="description" content="Martini cocktail details" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="martini-page">
                <h1>マティーニの詳細</h1>
                <p>マティーニは、ジンとドライ・ヴェルモットを使ったクラシックなカクテルです。</p>
                <Link href="/">
                    <button>ホームに戻る</button>
                </Link>
            </div>
        </>
    );
}
