import Recipe from "@/components/pageContent/recipes/RecipePage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type RecipeType from "@/types/RecipeType";
import { Params } from "next/dist/server/request/params";

export const revalidate = 60;

export default async function Page({ params }): Promise<React.ReactElement> {
  const recipe = await getRecipe(params);

  return <Recipe recipe={recipe} />;
}

async function getRecipe(params: Params): Promise<RecipeType> {
  const { slug } = await params;

  const recipesList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );

  // TODO: Pulling all recipe data just to search for the one that matches the slug is inefficient.
  //   Consider pulling these once, elsewhere, and passing the correct recipe to this component.
  // Followup: This might be irrelevant now that I'm using getStaticProps to fetch the data server-side.
  const recipe = recipesList.data.find((recipe) => recipe.slug === slug);

  return recipe;
}

export async function generateStaticParams(): Promise<Array<any>> {
  const recipesList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );

  return recipesList.data.map((recipe) => ({
    slug: recipe.slug,
  }));
}
