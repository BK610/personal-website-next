import BaseLayout from "@/components/BaseLayout";
import RecipeContent from "@/components/pageContent/recipes/RecipeContent";
import type RecipeType from "@/types/RecipeType";

interface RecipeProps {
  recipe: RecipeType;
}

export default function Recipe({ recipe }: RecipeProps): React.ReactElement {
  return (
    <BaseLayout titleText={`Recipes | ${recipe.title}`}>
      <div className="max-w-3xl mx-auto">
        <RecipeContent recipe={recipe} />
      </div>
    </BaseLayout>
  );
}
