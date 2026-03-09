"use client";

import { useRouter } from "next/navigation";
import { getRandomCocktail } from "@/lib/api/cocktail";

export default function RandomButton() {
  const router = useRouter();

  const handleClick = async () => {
    const data = await getRandomCocktail();
    const drink = data.drinks?.[0];

    if (drink) {
      router.push(`/cocktail/${drink.idDrink}`);
    }
  };

  return (
    <button onClick={handleClick}>
      Dime algo bonito
    </button>
  );
}