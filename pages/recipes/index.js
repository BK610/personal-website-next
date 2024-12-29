import React, { Component } from "react";
import { attributes, react as RecipesContent } from "../../content/recipes.md";
import RecipeSectionItem from "../../components/RecipeSectionItem";
import BaseLayout from "../../components/BaseLayout";
import SectionList from "../../components/SectionList";
import PageHeading from "../../components/PageHeading";
import { getSheetsCSV, parseCSV } from "../../lib/sheetsConnector";

export default class Recipes extends Component {
  static async getInitialProps() {
    const recipesList = await importRecipes();

    return { recipesList };
  }

  render() {
    let { title } = attributes;
    const { recipesList } = this.props;
    return (
      <BaseLayout navbarVisible={true} titleText={"Recipes"}>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-md space-y-4">
            <PageHeading>{title}</PageHeading>
            <div className="text-lg">
              <RecipesContent />
            </div>
            <SectionList>
              {recipesList.data.map((recipe, k) => (
                <RecipeSectionItem
                  link={"/recipes/" + recipe.slug}
                  name={recipe.title}
                  description={recipe.description}
                  icon={recipe.thumbnail}
                  key={k}
                  className={"max-w-md w-full"}
                />
              ))}
            </SectionList>
          </div>
        </div>
      </BaseLayout>
    );
  }
}

const importRecipes = async () => {
  const recipesCsv = await getSheetsCSV(
    process.env.NEXT_PUBLIC_RECIPES_DATA_URL
  );
  const recipesJson = parseCSV(recipesCsv);
  return recipesJson;
};
