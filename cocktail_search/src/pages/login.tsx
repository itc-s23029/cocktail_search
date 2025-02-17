import { FC, useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import { GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserSessionPersistence, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase'; // auth をインポート
import { AuthContext } from '@/Context/Auth';
import Link from "next/link";


const Login: FC = () => {
    const { currentUser } = useContext(AuthContext);
    const [error, setError] = useState<string | null>(null);

    // Googleでサインインする関数
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider(); // Google認証プロバイダーを作成

        // サインアウトしてセッションをリセット
        signOut(auth)
            .then(() => {
                // セッションストレージに認証情報を保存しないように設定
                setPersistence(auth, browserSessionPersistence) // セッションをブラウザのセッションストレージに設定
                    .then(() => {
                        // Google認証のポップアップでアカウント選択画面を表示させるために `prompt` を追加
                        provider.setCustomParameters({
                            prompt: "select_account" // 強制的にアカウント選択画面を表示
                        });

                        // Googleログインのポップアップを表示
                        signInWithPopup(auth, provider)
                            .then((result) => {
                                if (result?.user) {
                                    // ログイン後、管理者用のメールアドレスかどうかを確認
                                    const adminGmails = process.env.NEXT_PUBLIC_ADMIN_GMAILS?.split(',') || [];
                                    if (adminGmails.includes(result.user.email!)) {
                                        Router.push('/admin'); // 管理者なら/adminにリダイレクト
                                    } else {
                                        Router.push('/'); // 一般ユーザーならホームページにリダイレクト
                                    }
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                                setError("ログインに失敗しました。再試行してください。");
                            });
                    })
                    .catch((error) => {
                        console.error("セッション設定に失敗しました: ", error);
                        setError("セッション設定の失敗");
                    });
            })
            .catch(() => {
                console.error("サインアウトに失敗しました。");
                setError("サインアウトに失敗しました。");
            });
    };

    useEffect(() => {
        if (currentUser) {
            // 管理者ユーザーの場合は /admin にリダイレクト
            const adminEmails = process.env.NEXT_PUBLIC_ADMIN_GMAILS?.split(',') || [];
            if (adminEmails.includes(currentUser.email!)) {
                Router.push('/'); // 管理者用カクテル編集ページにリダイレクト
            } else {
                Router.push('/'); // 一般ユーザーの場合はホームページにリダイレクト
            }
        }
    }, [currentUser]);

    // Firebase Authenticationの状態を監視
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || [];
                if (adminEmails.includes(user.email!)) {
                    Router.push('/admin');
                } else {
                    Router.push('/');
                }
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <div className="p-fv">
                <div className="color-label">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <h1 className="title">LOGIN</h1>
                </div>

                <div className="center-container">
                    <div className="container-">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button className="loginbt" onClick={signInWithGoogle}>Googleで続行</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
