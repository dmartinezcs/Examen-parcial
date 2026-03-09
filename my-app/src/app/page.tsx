import CocktailCard from "@/components/cocktailCard";
import RandomButton from "@/components/randomButton";
import { getCocktails } from "@/lib/api/cocktail";

export default async function HomePage() {
  const data = await getCocktails();
  const cocktails = data.drinks || [];

  return (
    <main className="home-page">
      <h1 className="title">Página de cocktails</h1>

      <RandomButton />

      <div className="cocktails-grid">
        {cocktails.map((drinks) => (
          <CocktailCard key={drinks.idDrink} drink={drinks} />
        ))}
      </div>
    </main>
  );
}