import Link from "next/link";
import { Drink } from "@/types/cocktail";

type Props = {
  drink: Drink;
};

export default function Cocktail({ drink }: Props) {
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