import { FC, useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import { GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserSessionPersistence, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase'; // auth をインポート
import { AuthContext } from '@/Context/Auth';

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

    // サインアウト（ログアウト）する関数
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                Router.push('/login'); // ログアウト後にログインページにリダイレクト
            })
            .catch((error) => {
                console.error(error);
                setError("ログアウトに失敗しました。");
            });
    };

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
            <header>
                <h1>ログイン画面</h1>
            </header>
            <main>
                <div className="container">
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {!currentUser ? (
                        <button onClick={signInWithGoogle}>Googleでログイン</button>
                    ) : (
                        <>
                            <p>ようこそ、{currentUser.displayName}さん</p>
                            <button onClick={signOutUser}>ログアウト</button>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Login;
