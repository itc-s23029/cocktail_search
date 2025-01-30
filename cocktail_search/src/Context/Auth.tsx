import { ReactNode, FC, createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import firebaseApp from '../utils/firebase'; // Firebaseの初期化

type AuthContextProps = {
    currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {  // childrenに型指定
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

    useEffect(() => {
        const auth = getAuth(firebaseApp);  // Firebaseの認証インスタンスを取得
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        // クリーンアップ
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
