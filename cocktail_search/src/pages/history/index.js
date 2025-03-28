import Head from "next/head";
import { useState } from "react"; // ★ 追加：メニューの開閉状態を管理
import Nav from "../../components/nav"; // ★ 追加：ハンバーガーメニューをインポート
import Link from "next/link";

export default function History() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <div>
            <Head>
                <title>Cocktail App</title>
                <meta name="description" content="A cocktail app to explore, search, and add new cocktails"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="p-fv">
                <div className="color-label">
                    <Link href="/">
                        <div className="logo"></div>
                    </Link>
                    <h1 className="title">History</h1>
                </div>

                {/* ハンバーガーメニュー */}
                <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
                <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
                    <Nav />
                </div>

                {/* === 本文全体を囲むコンテナ === */}
                <div className="history-content">
                    <h1>歴史</h1>
            <p>
                原始的なカクテルが作られはじめたのは、
                古代ローマや古代ギリシャ、古代エジプトの時代だったと考えられている。
                これは、当時のアルコール飲料（ワインやビールであった）
                の質が現代に比べてはるかに劣るものであり、
                その味を改善するための手段であった。
                古代ローマ、古代ギリシャでは、
                そのまま保存したのでは劣化・酸化してしまうワインに熱を加え、
                凝縮したうえで副材料（草根木皮や粘土など[8]）を混ぜたものを保存していた。
                それを水で割って飲むことが一般的なワインの飲み方とされており、
                これは「酒＋何か」の定義に当てはまる。
                また、古代エジプトではビールにさまざまな副材料を加えたものが飲用されており、
                これには、カルミ（calmi、蜂蜜を加えたもの）、
                チズム（zythum、ういきょうやサフランなどを加えたもの）、
                コルマ（korma、生姜と蜂蜜を加えたもの）があった。
                こちらも「酒＋何か」の定義に当てはまる。
                他にも、原始的なカクテルとしては、
                唐で作られていた「ワイン＋馬乳」というものがある。
                このように、「常温」で飲まれていたカクテルであったが、
                中世の時代になると、寒い冬の時期に「カクテルを温めて飲む」
                という習慣が生まれていく。
                その名残として、現代でもフランスのヴァン・ショー（仏: vin chaud）、
                ドイツのグリューヴァイン（独: Glühwein）、
                北欧のグレッグ（丁: Gløgg、諾: Gløgg）といったものが飲用されている。
                さらに、中世は蒸留酒が錬金術師たちによって作り出された時代でもあり、
                様々なカクテルが誕生した時代でもある。
                この時代に生まれたものとして特筆されるのはイギリス陸軍大佐フランシス・ニーガス（英: Francis Negus）が考案したニーガス（英: Negus、ポート・ワイン＋湯＋砂糖＋レモン＋ナツメグ＋ブランデー）、
                インドが発祥といわれる「パンチ・スタイル」がある。
                近年では、氷を用いた「コールド・ドリンク」が主流であるが、
                そうしたカクテルが登場するのはずっと後、
                19世紀末から20世紀初頭になってからのことである。
                「氷は近代になるまで貴重品であったから」というのがその理由であったが、
                1876年にカール・フォン・リンデが製氷機を開発したことによって、
                一年を通していつでも氷を入手できるようになった。
                これにより、「マティーニ」や「マンハッタン」といった、新しいジャンルの、
                現在ではカクテルの代表格とされるレシピが発案されていったのである。
                それらの新しいカクテルはアメリカで生まれたものであったが、
                第一次世界大戦と禁酒法により職を失ったバーテンダーがヨーロッパへ移っていったことによって、
                全世界に広がっていくことになったのである。
                1920-30年代のヨーロッパにジャズなどのアメリカ文化が流入し、
                その一端としてカクテルブームが起きた。
                イギリスでは第一次世界大戦以前はディナーの前に酒を飲む習慣はほとんど無かったが、
                アフタヌーン・ティーの時間に女性も含めた仲間が連れ立ってホテルのバーなどに集まり、
                強いカクテルを飲むことが当たり前のようになった。カクテル・タイムと呼ばれるこの新しい習慣は、
                若い世代を中心にあっという間に受け入れられた。
            </p>
            <h1>
                カクテルの語源
            </h1>
            <p>
                「酒＋その他の酒 and/or その他の副材料」を指して「カクテル」と呼ぶようになったのは、
                1700年代とも1800年代に入りすぐとも言われている。
                前者の説を「イギリス説」、後者の説を「アメリカ説」と言う。
                その語源については諸説あり、例えばバーテンダーの団体間で統一するといったことはなされていない。
                この単語自体はおそらく、cock-tail、
                すなわち「尻尾(tail)が雄鶏(cock)のように立っている」という特に馬について言う表現から来ているが、
                これが今で言う「カクテル」を指すようになった経緯ははっきりしない。
                しかしながら、最も有力な説は原義を刺激物として、刺激的な飲料を指すとする説、
                もしくは原義を混血の馬として、混合した飲料を指すという説がある。
                デイビット・ワンドリッチ(David Wondrich)はカクテルがジンジャリング（英語版）（老いた馬に生姜座薬を使って、その「尻尾を上げて(cock its tail up)元気にさせる」こと）を指していて、
                それが刺激的な飲料、つまり強壮剤を意味するようになったと推定している。この説は、カクテルの初期の用法（1798年「カク・テル（俗にショウガと呼ばれる）」 、
                1803年「午前11時に、頭をすっきりさせるために飲む」、1806年「刺激的な酒」）と整合し、
                カクテルがその初期には薬として扱われていたことも示唆するが、
                これは薬用酒であるビターズが使われていたこととも整合する。
            </p>
            <h2>民族語源</h2>
            <h3>「メキシコ王の娘」説</h3>
            <p>
                『サヴォイ・カクテルブック』で、「カクテルという言葉の起源」として特に紹介されている説。
                19世紀のはじめ、アメリカ合衆国南部陸軍とアホロートル8世 (Axolotl VIII) 率いるメキシコ軍の間には小競り合いが絶えなかった。
                しかしある時、休戦協定が結ばれることとなった。
                休戦協定交渉にあたり、まず最初に酒が供された。
                自身が調合したらしき飲み物を満たした杯を持ち、美女がその場に現れたが、
                その杯がひとつしかなかったことで、その場の雰囲気が不穏なものとなる。
                杯がひとつだけということは、アメリカ軍の将軍かメキシコ王か、
                どちらかが先に飲むことを意味しており、
                後に回された方が「自らを侮辱している」と感じるのではないかという懸念があったからである。
                しかし、その美女は不穏な空気を察し、微笑みうやうやしく頭を垂れると、
                自らその杯の酒を飲み干した。これにより、その場の緊張が解け、交渉は成功に終わる。
                協定交渉の最後、将軍が機転の利くその美女についてたずねると、
                王は自らもその美女に会ったことはなかったにもかかわらず、自慢げに答えた。
                「あれは自分の娘で、コクテル（Coctel）という」。
                サヴォイ・カクテルブックに示された説はこのとおりであるが、
                他の文献にも類似の説が示されている。ただし、19世紀はじめのメキシコにはすでに王はおらず、
                アホロートル8世という名の王も存在していない。
            </p>
            <h3>「コーラ・デ・ガジョ（木の名前）」説</h3>
            <p>
                国際バーテンダー協会が、カクテルの語源として採用している説。
                また、サントリーの公式HPでもこの説が有名なものとして紹介されている。
                メキシコのユカタン半島にあるカンペチェという港町にイギリス船が入港したときのこと、
                船員達は町の居酒屋に立ち寄り、渇きを癒していた。
                当時、イギリス人たちが酒を飲むときには、ほぼストレートでしか飲んでいなかった。
                しかし、カンペチェでは「ブランデー、もしくはラムに砂糖などをミックスした飲み物（ドラック・drac）」が流行していた。
                この飲み物は、酒をストレートで飲む習慣しかなかったイギリス人の興味を引くものだった。
                ドラックは、厚手のグラスに材料を入れ、スティックやスプーンで攪拌して作られるものであったが、
                金属製のスティックを使うと不快な臭いがドラックに移ると嫌われていたため、
                木製のスティックを使うことが多かった。ある店の少年もそうであった。
                あるとき、船員は少年に「それはなんだ?」とたずねた。
                船員は「その飲み物の名（ドラック）」をたずねたのであるが、
                少年は攪拌に使用したスティックのことをたずねられたと思い、
                「これはコーラ・デ・ガジョ（cola de gallo スペイン語で「雄鶏の尻尾」の意）です」と答えた。
                その道具の形が雄鶏の尻尾に似ていたからである。
                ともあれ、船員はその飲み物を「コーラ・デ・ガジョ」を英語に訳した「テール・オブ・コック」と言う名で呼ぶようになった。
                このエピソードはカンペチェに入港する船員たちに広まり、
                次第に他の地域の酒場でもこの名を使用するようになっていく。
                そのうちに、「テール・オブ・コック」を1語とした「カクテル」という語句が生まれ、
                それがミクスト・ドリンク全般を指すようになっていった。
                この説を最初に提唱したのはハリー・クラドックである。
                1936年1月に発行されたイギリスバーテンダー協会（United Kingdom Bartender&rsquo;s Guild、U.K.B.G.）の機関誌『ザ・バーテンダー（The Bartender）』に、
                「ルーカス・デ・パラシオという人物から聞いた話」として掲載された。
                後に、イギリスバーテンダー協会が監修したカクテルブック『UKBG インターナショナル・ガイド・トゥ・ドリンクス（U.K.B.G. International Guide to Drinks）』に掲載、
                1967年に発行された『ザ・バーテンダー』でも再掲されている。
                日本でも1967年の『ザ・バーテンダー』再掲を期として、
                1969年10月に発行された全日本バーテンダー協会（All Nippon Bartenders Association）の機関誌によって、
                この説が紹介されている。
            </p>
            <h3>「四角軒」説</h3>
            <p>
                「ベッチー・フラナガン（ベッツィー・フラグナンとも、Betsy Flanagan）」説や「雄鶏」説などとも呼ばれているが、
                いずれにしても「四角軒」という名のバーが舞台であることから、
                「四角軒」説として記述する。
                アメリカ独立戦争の折、ニューヨークの北にイギリスの植民地があった。
                町の名はエムスフォードといった。戦争で、騎兵隊員であった夫を亡くしたベッチー・フラナガンが、
                この町で「四角軒」というバーを経営していた。
                彼女は独立派側に与しており、独立軍にオリジナルのミクスト・ドリンクを振舞っていた。
                あるとき、彼女は反独立派側に属する人間の屋敷に忍び込み、立派な尻尾を持つ雄鶏を盗み出す。
                盗んだ雄鶏はローストチキンに、その尻尾は酒壺に飾られた。
                その夜も、独立軍の兵士達は四角軒で、ローストチキンをつまみに酒を飲んでいた。
                ある将校がおかわりをしようとし、酒壺に飾られた雄鶏の尻尾に気付く。
                「ずいぶん立派な雄鶏の尻尾じゃないか。一体どこから手に入れたんだ？」すると彼女はこう答えた。
                「失敬したのよ。イギリス男の家からね」。自分たちが口にしていたローストチキンの正体を知った兵士達は、
                高らかに叫んだ。「Viva cock&rsquo;s tail!（コックテール、万歳!）」。
                以来四角軒で振舞われるミクスト・ドリンクには「コックテール」の名が与えられ、
                その名が広まっていった。
            </p>
            <h2>その他の説</h2>
            <h3>「雄鶏の尻尾（コックス・テール）」説</h3>
            <p>
                飾りのため、あるいはグラスの中身にアルコールが含まれていることを示すために、
                羽根をグラスに差す風習があったとされる。
                この羽根は雄鶏の尻尾（cock tail）からとったもので、
                そこからカクテルの名がついたとの説がある。
                なお、中国語ではカクテルを「鶏尾酒」（繁体字: 雞尾酒/鷄尾酒、簡体字: 鸡尾酒、拼音: jī wěi jiǔ）と呼ぶ。
                「雄鶏の尻尾」説には以下のような諸説あるが、決定的なものはない。
                ・飲料を攪拌するために雄鶏の尻尾が使われていたことが由来であるとの説
                ・雄鶏の尻尾がカクテルのように七色に変化することが由来であるとの説
                ・闘鶏の盛んだった頃、試合の結果、尻尾に羽を一番多く残した雄鶏を祝福して乾杯した故事が由来であるとの説
                ・闘鶏の際に鶏を興奮させるために使用された火酒「コケール」あるいは「コックズ・エール（cock&rsquo;s ale）」が由来であるとの説
            </p>
            <h3>「ニューオリンズの薬屋」説</h3>
            <p>
                サン＝ドマングからアメリカのニューオリンズに移住してきた薬剤師アントワーヌ・アメデ・ペイショー（Antoine Amédée Peychaud）が今日ペイショーズ・ビターズ（英語版）と呼ばれるビターズを1834年に発明した。
                これと砂糖、ブランデーを混ぜたものをコクティエ（フランス語: coquetier、フランス語でエッグスタンド）に入れて売っていたが、
                これが評判となった。やがて、英語訛りのカクテルと呼ばれるようになった。
            </p>
                </div>
            </div>
        </div>
    )
}