import RecipeSectionItem from "../../components/RecipeSectionItem";
import BaseLayout from "../../components/BaseLayout";
import SectionList from "../../components/SectionList";
import { importCSVDataAsJson } from "../../lib/sheetsConnector";

export default function Recipes({ recipesList }) {
  return (
    <BaseLayout titleText={"Recipes"}>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-lg space-y-4">
          <h2>Recipes</h2>
          <div className="text-lg">Behold, my lovely recipes.</div>
          <SectionList className="space-y-4">
            {recipesList.data.map((recipe, k) => (
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
export async function getStaticProps() {
  const recipesList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );

  return {
    props: { recipesList },
    revalidate: 60,
  };
}
