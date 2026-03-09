import Link from "next/link";
import { Cocktail } from "@/types/cocktail";

type Props = {
  drink: Cocktail;
};

export default function CocktailCard({ drink }: Props) {
  return (
    <Link href={`/cocktail/${drink.idDrink}`}>
      <div className="cocktail-card">
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <h3>{drink.strDrink}</h3>
      </div>
    </Link>
  );
}