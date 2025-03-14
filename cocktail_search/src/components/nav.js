import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/clist">
                        カクテル一覧
                    </Link>
                </li>
                <li>
                    <Link href="/csearch">
                        カクテル検索
                    </Link>
                </li>
                <li>
                    <Link href="/cadd">
                        カクテル追加
                    </Link>
                </li>
                <li>
                    <Link href="/history">
                        カクテル歴史紹介
                    </Link>
                </li>
            </ul>
        </nav>
    )
}