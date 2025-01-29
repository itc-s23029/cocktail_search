import React, { FC, useState } from 'react';
import Image from 'next/image';  // ここで Image をインポート

const AdminCocktailEdit: FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    // 画像選択時に呼び出される関数
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            // 画像URLを生成してプレビュー用に表示
            const objectUrl = URL.createObjectURL(file);
            setImageUrl(objectUrl);
        }
    };

    return (
        <div>
            <header>
                <h1>管理者カクテル編集</h1>
            </header>

            <main>
                <div className="container">
                    {/* 編集フォームの見出し */}
                    <h2>カクテル情報編集</h2>
                </div>

                {/* カクテル名 */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>

                {/* 画像アップロード */}
                <div>
                    <label htmlFor="image">Add image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                {/* 画像プレビュー */}
                {imageUrl && (
                    <div>
                        <Image
                            src={imageUrl}
                            alt="Image Preview"
                            width={100}  // 画像の幅
                            height={100} // 画像の高さ
                        />
                    </div>
                )}

                {/* 他の入力フィールド */}
                <div>
                    <label htmlFor="Material">材料:</label>
                    <textarea id="Material" name="Material" rows={4}></textarea>

                    <div className="Keywords"></div>
                    <div className="Base">Base:</div>
                    <div className="Tec">Tec:</div>
                    <div className="Taste">Taste:</div>

                    <div className="Keywords2"></div>
                    <div className="Style">Base:</div>
                    <div className="Alc">Tec:</div>
                    <div className="Top">Taste:</div>

                    <div className="Keywords3"></div>
                    <div className="Glass">Base:</div>
                    <div className="Color">Tec:</div>

                    <div>
                        <label htmlFor="Tag">タグ:</label>
                    </div>

                    <div>
                        <label htmlFor="HowtoMake">作り方:</label>
                        <textarea id="HowtoMake" name="HowtoMake" rows={4}></textarea>
                    </div>

                    <div>
                        <label htmlFor="description">説明:</label>
                        <textarea id="description" name="description" rows={4}></textarea>
                    </div>

                    {/* 追加ボタン */}
                    <div>
                        <button>追加</button>
                    </div>
                    <div>
                        <h2>カクテル一覧</h2>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminCocktailEdit;
