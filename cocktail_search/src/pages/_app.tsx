import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { AuthProvider } from '@/Context/Auth';  // AuthProviderのインポート

function MyApp({ Component, pageProps }: AppProps) {
  return (
      // AuthProviderでラップする
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />  {/* コンポーネントに認証情報を提供 */}
        </Layout>
      </AuthProvider>
  );
}
export default MyApp;

