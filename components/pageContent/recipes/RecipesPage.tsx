import RecipeSectionItem from "@/components/pageContent/recipes/RecipeSectionItem";
import BaseLayout from "@/components/BaseLayout";
import SectionList from "@/components/SectionList";
import type RecipeType from "@/types/RecipeType";
import type { Key } from "react";

interface RecipesProps {
  recipesList: {
    data: Array<RecipeType>;
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
          <div className="text-sm text-stone-700 dark:text-stone-300">
            See my latest food adventures at{" "}
            <a
              href="https://bsky.app/profile/food.baileykane.co"
              target="_blank"
              className="underline hover:decoration-2"
            >
              @food.baileykane.co
            </a>{" "}
            on Bluesky.
          </div>
          <div className="text-lg">Behold, my lovely recipes.</div>
          <SectionList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {recipesList.data.map((recipe: RecipeType, k: Key) => (
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
