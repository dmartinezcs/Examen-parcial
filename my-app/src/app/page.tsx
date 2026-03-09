'use client';

import { getFrontpageCocktails } from "@/lib/api/cocktail";
import CocktailCard from "@/components/cocktailCard";
import { Cocktail } from "@/types";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const Home = () => {


  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getFrontpageCocktails()
      .then((res) => setCocktails(res))
      .catch((e: AxiosError) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const router = useRouter();
/*
   {cocktails.map((cocktails) => (
          <CocktailCard
            key={cocktail.id}
            country={cocktail.name}
          />
        ))}
*/

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <main>
      <h1>Página principal</h1>

      <button onClick={()=>{
        router.push("https://www.thecocktaildb.com/api/json/v1/1/random.php")}}>Dime algo bonito</button>
      <div className="grid">

        
      </div>
    </main>
  );
};

export default Home;