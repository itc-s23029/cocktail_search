import Head from "next/head";
import Hero from "@/components/hero";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
      <>
        <Head>
          <title>Cocktail App</title>
          <meta name="description" content="A cocktail app to explore, search, and add new cocktails" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Hero />
          <button onClick={() => router.push("/clist")}>cocktail list</button>
          <button onClick={() => router.push("/csearch")}>cocktail search</button>
          <button onClick={() => router.push("/cadd")}>cocktail add</button>
          <button onClick={() => router.push("/fadd")}>cocktail add</button>
          <button onClick={() => router.push("/fsearch")}>cocktail search</button>
          <button onClick={() => router.push("/history")}>history</button>
        </div>
      </>
  );
}