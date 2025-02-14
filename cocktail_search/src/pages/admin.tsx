import React, { FC, useState } from 'react';
import Image from 'next/image';

interface Cocktail {
    name: string;
    imageUrl: string;
    material: string;
    howToMake: string;
    description: string;
    base: string;
    tec: string;
    taste: string;
    style: string;
    alc: string;
    top: string;
    glass: string;
    color: string;
    keyword: string; // タグ
}

const AdminCocktailEdit: FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [cocktailName, setCocktailName] = useState<string>('');
    const [material, setMaterial] = useState<string>('');
    const [howToMake, setHowToMake] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [base, setBase] = useState<string>('');
    const [tec, setTec] = useState<string>('');
    const [taste, setTaste] = useState<string>('');
    const [style, setStyle] = useState<string>('');
    const [alc, setAlc] = useState<string>('');
    const [top, setTop] = useState<string>('');
    const [glass, setGlass] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [cocktailList, setCocktailList] = useState<Cocktail[]>([]);
    const [selectedKeyword, setSelectedKeyword] = useState<string>('');
    const [baseOptions,] = useState<string[]>([]); // baseの選択肢
    const [tecOptions,] = useState<string[]>([]); // tecの選択肢
    const [tasteOptions,] = useState<string[]>([]); // tasteの選択肢
    const [styleOptions,] = useState<string[]>([]); // styleの選択肢

    // カクテルの追加処理
    const handleAddCocktail = () => {
        if (
            cocktailName &&
            imageUrl &&
            material &&
            howToMake &&
            description &&
            selectedKeyword &&
            base &&
            tec &&
            taste &&
            style &&
            alc &&
            top &&
            glass &&
            color
        ) {
            const newCocktail: Cocktail = {
                name: cocktailName,
                imageUrl,
                material,
                howToMake,
                description,
                base,
                tec,
                taste,
                style,
                alc,
                top,
                glass,
                color,
                keyword: selectedKeyword,
            };

            setCocktailList([...cocktailList, newCocktail]);
            setCocktailName('');
            setImageUrl(null);
            setMaterial('');
            setHowToMake('');
            setDescription('');
            setBase('');
            setTec('');
            setTaste('');
            setStyle('');
            setAlc('');
            setTop('');
            setGlass('');
            setColor('');
            setSelectedKeyword('');
        } else {
            alert('すべてのフィールドを入力してください');
        }
    };

    return (
        <div>
            <header>
                <h1>管理者カクテル編集</h1>
            </header>

            <main>
                <div className="container">
                    <h2>カクテル情報編集</h2>

                    {/* フォーム部分 */}
                    <div>
                        <label htmlFor="name">カクテル名:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={cocktailName}
                            onChange={(e) => setCocktailName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="image">画像を追加:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files![0]))}
                        />
                    </div>

                    {imageUrl && (
                        <div>
                            <Image src={imageUrl} alt="Image Preview" width={100} height={100} />
                        </div>
                    )}

                    {/* 他のフォームフィールド */}
                    <div>
                        <label htmlFor="Material">材料:</label>
                        <textarea
                            id="Material"
                            name="Material"
                            rows={4}
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="HowtoMake">作り方:</label>
                        <textarea
                            id="HowtoMake"
                            name="HowtoMake"
                            rows={4}
                            value={howToMake}
                            onChange={(e) => setHowToMake(e.target.value)}
                        ></textarea>
                    </div>

                    {/* base、tec、taste、styleの選択肢 */}
                    <div>
                        <label htmlFor="base">Base:</label>
                        <select
                            id="base"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                        >
                            <option value="">Baseを選択</option>
                            {baseOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="tec">Tec:</label>
                        <select
                            id="tec"
                            value={tec}
                            onChange={(e) => setTec(e.target.value)}
                        >
                            <option value="">Tecを選択</option>
                            {tecOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="taste">Taste:</label>
                        <select
                            id="taste"
                            value={taste}
                            onChange={(e) => setTaste(e.target.value)}
                        >
                            <option value="">Tasteを選択</option>
                            {tasteOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="style">Style:</label>
                        <select
                            id="style"
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                        >
                            <option value="">Styleを選択</option>
                            {styleOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* その他のフィールドとカクテル追加ボタン */}
                    <div>
                        <button onClick={handleAddCocktail}>カクテルを追加</button>
                    </div>

                    <div>
                        <h3>カクテルリスト</h3>
                        <ul>
                            {cocktailList.map((cocktail, index) => (
                                <li key={index}>
                                    {cocktail.name} - {cocktail.base} - {cocktail.tec}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminCocktailEdit;
