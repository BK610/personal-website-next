import Recipes from "@/components/pageContent/recipes/RecipesPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type RecipeType from "@/types/RecipeType";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const recipes = await getRecipes();

  return <Recipes recipesList={recipes} />;
}

async function getRecipes(): Promise<{
  data: Array<RecipeType>;
}> {
  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );

  return projectsList;
}
