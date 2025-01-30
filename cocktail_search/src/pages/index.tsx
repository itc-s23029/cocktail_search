import Hero from "@/components/hero";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
  return (
      <div>
        <Hero />
          <button onClick={() => router.push("/clist")}>cocktail list</button>
          <button onClick={() => router.push("/csearch")}>cocktail search</button>
          <button onClick={() => router.push("/cadd")}>cocktail add</button>
          <button onClick={() => router.push("/fadd")}>cocktail add</button>
          <button onClick={() => router.push("/fsearch")}>cocktail search</button>
          <button onClick={() => router.push("/history")}>history</button>
      </div>
  )
}