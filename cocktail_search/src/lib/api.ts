import axios from "axios";

const BASE_URL = "http://cocktail-f.com/api/v1/cocktails";

export interface Cocktail {
    name: string;
    base: string;
    technique: string;
    taste: string;
}

export const fetchCocktails = async (params: Record<string, string | number>) => {
    const { data } = await axios.get<{ results: Cocktail[] }>(BASE_URL, { params });
    return data.results;
}