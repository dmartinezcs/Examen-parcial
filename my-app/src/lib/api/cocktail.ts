import { Cocktail } from "@/types";


import { api } from "./axios";



export async function getFrontpageCocktails() {
  const response = await api.get<Cocktail[]>(`/search.php?s=margarita`);
  return response.data;
}

export async function getRandomCocktail() {
  const response = await api.get<Cocktail[]>(`/random.php`);
  return response.data;
}


/*
export async function getCountryByName(name: string) {
  const response = await api.get<Country>(`/name/${name}`);
  return response.data;
}

export async function getCountriesByRegion(region: string) {
  const response = await api.get<Country>(`/region/${region}`);
  return response.data;
}

*/