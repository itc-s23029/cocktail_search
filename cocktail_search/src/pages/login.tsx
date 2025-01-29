// src/pages/login.tsx
import { FC, useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { getAuth, GoogleAuthProvider, getRedirectResult, signInWithPopup } from 'firebase/auth';
import firebaseApp from '../utils/firebase'; // Firebase初期化
import { AuthContext } from '@/Context/Auth';

const Login: FC = () => {
    const { currentUser } = useContext(AuthContext);
    const [error, setError] = useState<string | null>(null);

    // Firebase認証インスタンスを取得
    const auth = getAuth(firebaseApp);

    // Googleでサインインする関数
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);  // リダイレクトでGoogle認証を開始
    };

    useEffect(() => {
        if (currentUser) {
            // 管理者ユーザーの場合は /admin にリダイレクト
            const adminEmails = process.env.NEXT_PUBLIC_ADMIN_GMAILS?.split(',') || [];
            if (adminEmails.includes(currentUser.email!)) {
                Router.push('/admin'); // 管理者用カクテル編集ページにリダイレクト
            } else {
                Router.push('/'); // 一般ユーザーの場合はホームページにリダイレクト
            }
        }
    }, [currentUser]);

    useEffect(() => {
        getRedirectResult(auth).then((result) => {
            if (result?.user) {
                // リダイレクト後の認証結果を処理
                const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || [];
                if (adminEmails.includes(result.user.email!)) {
                    Router.push('/admin'); // 管理者の場合、adminページにリダイレクト
                } else {
                    Router.push('/'); // 一般ユーザーの場合、ホームページにリダイレクト
                }
            }
        }).catch((error) => {
            console.error(error);
            setError("ログインに失敗しました。再試行してください。");
        });
    }, [auth]);

    return (
        <div>
            <header>
                <h1>ログイン画面</h1>
            </header>

            <main>
                <div className="container">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={signInWithGoogle}>Googleでログイン</button>
                </div>
            </main>
        </div>
    );
};

export default Login;
