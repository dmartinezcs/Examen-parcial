import { getCocktailById } from "@/lib/api/cocktail";
import { Cocktail } from "@/types/cocktail";
import BackButton from "@/components/backButton";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CocktailDetail({ params }: PageProps) {
  const { id } = await params;

  const data = await getCocktailById(id);
  const drink = data.drinks?.[0];

  if (!drink) {
    return <p>No se puede encontrar el cocktail</p>;
  }

  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ].filter((ingredient): ingredient is string => Boolean(ingredient?.trim()));

  return (
    <main className="detail-page">
      <h1>{drink.strDrink}</h1>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
      />
      <p>Categoría: {drink.strCategory}</p>
      <p>Es alcoholico: {drink.strAlcoholic}</p>
      <p>Tipo de vaso: {drink.strGlass}</p>
      <p>Instrucciones en inglés: {drink.strInstructions}</p>
      <p>Ingredientes necesarios: </p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <br/>
      <BackButton />
    </main>
  );
}