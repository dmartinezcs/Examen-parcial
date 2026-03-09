import axios from "axios";
import { CocktailsRes } from "@/types/cocktail";

const api = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
  timeout: 5000
});

export const getCocktails = async (): Promise<CocktailsRes> => {
  const res = await api.get("/search.php?s=margarita");
  return res.data;
};

export const getCocktailById = async (
  id: string
): Promise<CocktailsRes> => {
  const res = await api.get(`/lookup.php?i=${id}`);
  return res.data;
};

export const getRandomCocktail = async (): Promise<CocktailsRes> => {
  const res = await api.get("/random.php");
  return res.data;
};