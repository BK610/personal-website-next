import React, { Component } from "react";
import RecipeSectionItem from "../../components/RecipeSectionItem";
import BaseLayout from "../../components/BaseLayout";
import SectionList from "../../components/SectionList";
import PageHeading from "../../components/PageHeading";
import { importCSVDataAsJson } from "../../lib/sheetsConnector";

export default class Recipes extends Component {
  static async getInitialProps() {
    const recipesList = await importCSVDataAsJson(
      process.env.NEXT_PUBLIC_RECIPES_DATA_URL
    );

    return { recipesList };
  }

  render() {
    const { recipesList } = this.props;
    return (
      <BaseLayout navbarVisible={true} titleText={"Recipes"}>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-md space-y-4">
            <PageHeading>Recipes</PageHeading>
            <div className="text-lg">Behold, my lovely recipes.</div>
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
