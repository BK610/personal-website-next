import MissingContent from "../../components/MissingContent";
import BaseLayout from "../../components/BaseLayout";
import RecipeContent from "../../components/RecipeContent";
import { importCSVDataAsJson } from "../../lib/sheetsConnector";

export default function Recipe({ recipe }) {
  if (!recipe) {
    return <MissingContent />;
  }

  return (
    <BaseLayout>
      <div className="max-w-3xl mx-auto">
        <RecipeContent recipe={recipe} />
      </div>
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export async function getStaticProps(context) {
  const { slug } = context.params;

  const recipesList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );

  // TODO: Pulling all recipe data just to search for the one that matches the slug is inefficient.
  //   Consider pulling these once, elsewhere, and passing the correct recipe to this component.
  // Followup: This might be irrelevant now that I'm using getStaticProps to fetch the data server-side.
  const recipe = recipesList.data.find((recipe) => recipe.slug === slug);

  return { props: { recipe }, revalidate: 60 };
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths
export async function getStaticPaths() {
  const recipesList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );

  const paths = recipesList.data.map((recipe) => ({
    params: { slug: recipe.slug },
  }));

  return { paths, fallback: false };
}
