import RecipeSectionItem from "@/components/RecipeSectionItem";
import BaseLayout from "@/components/BaseLayout";
import SectionList from "@/components/SectionList";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type Recipe from "@/types/Recipe";
import type { Key } from "react";
import type { GetStaticProps } from "next";

interface RecipesProps {
  recipesList: {
    data: Array<Recipe>;
  };
}

export default function Recipes({
  recipesList,
}: RecipesProps): React.ReactElement {
  return (
    <BaseLayout titleText={"Recipes"}>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-5xl space-y-4">
          <h2>Recipes</h2>
          <div className="text-lg">Behold, my lovely recipes.</div>
          <SectionList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {recipesList.data.map((recipe: Recipe, k: Key) => (
              <RecipeSectionItem
                link={"/recipes/" + recipe.slug}
                name={recipe.title}
                description={recipe.description}
                icon={recipe.thumbnail}
                key={k}
              />
            ))}
          </SectionList>
        </div>
      </div>
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export const getStaticProps = (async () => {
  const recipesList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );

  return {
    props: { recipesList },
    revalidate: 60,
  };
}) satisfies GetStaticProps<RecipesProps>;
