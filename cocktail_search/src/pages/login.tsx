import { FC, useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import {getAuth, GoogleAuthProvider, getRedirectResult, signInWithPopup} from 'firebase/auth';
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
            Router.push('/'); // ログイン後、ホームにリダイレクト
        }
    }, [currentUser]);

    useEffect(() => {
        getRedirectResult(auth).then((result) => {
            if (result?.user) {
                Router.push('/'); // ログイン成功後、ホームにリダイレクト
            }
        }).catch((error) => {
            console.error(error);
            setError("ログインに失敗しました。再試行してください。");
        });
    }, [auth]);

    return (
        <div className="container">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={signInWithGoogle}>Googleでログイン</button>
        </div>
    );
};

export default Login;
