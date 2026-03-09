import Link from "next/link";
import { Cocktail } from "@/types/";
import "./style.css";


interface Props {
  cocktail: Cocktail;
}

export default function CocktailCard({ cocktail }: Props) {
  return (
    <Link href={`/country/${cocktail.name || ""}`}>
      <div className="card">
        <img
          src={cocktail.img || ""}
        />
        <h3>{cocktail.name || "Unknown"}</h3>
        <p>Instrucciones: {cocktail.instructions ?? "N/A"}</p>
        <br/>
      </div>
    </Link>
  );
}