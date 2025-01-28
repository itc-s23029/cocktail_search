import { AppProps } from 'next/app';  // Next.jsの型
import { AuthProvider } from '@/Context/Auth';  // AuthProviderのインポート

function MyApp({ Component, pageProps }: AppProps) {
  return (
      // AuthProviderでラップする
      <AuthProvider>
        <Component {...pageProps} />  {/* コンポーネントに認証情報を提供 */}
      </AuthProvider>
  );
}
export default MyApp;

