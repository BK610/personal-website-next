import React, { Component } from "react";
import { attributes, react as RecipesContent } from "../../content/recipes.md";
import RecipeSectionItem from "../../components/RecipeSectionItem";
import BaseLayout from "../../components/BaseLayout";

export default class Recipes extends Component {
  static async getInitialProps() {
    const recipesList = await importRecipes();
    return { recipesList };
  }

  render() {
    let { title } = attributes;
    const { recipesList } = this.props;
    return (
      <BaseLayout navbarVisible={true}>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-md space-y-4">
            <h2 className="text-xl self-start mb-2">{title}</h2>
            <div className="text-lg">
              <RecipesContent />
            </div>
            <div className="space-y-4">
              {recipesList.map((recipe, k) => (
                <RecipeSectionItem
                  link={"/recipes/" + recipe.slug.toLowerCase()}
                  name={recipe.attributes.title}
                  description={recipe.attributes.description}
                  icon={recipe.attributes.thumbnail}
                  key={k}
                  className={"max-w-md w-full"}
                />
              ))}
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }
}

const importRecipes = async () => {
  // From https://github.com/masives/netlifycms-nextjs/blob/master/pages/blog/index.js
  const markdownFiles = require
    .context("../../content/recipes", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/recipes/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};
