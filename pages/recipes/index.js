import React, { Component } from "react";
import SectionItem from "../../components/SectionItem";

export default class Recipes extends Component {
  static async getInitialProps() {
    const recipesList = await importRecipes();
    return { recipesList };
  }

  render() {
    const { recipesList } = this.props;
    return (
      <div className="flex flex-col h-full min-h-screen w-full min-w-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 dark:text-gray-100 items-center">
        <div className="w-full max-w-md p-2 pb-4 space-y-4 select-none">
          {recipesList.map((recipe, k) => (
            <SectionItem
              link={"/recipes/" + recipe.slug.toLowerCase()}
              name={recipe.attributes.title}
              description={recipe.attributes.description}
              icon={recipe.attributes.thumbnail}
              key={k}
              className={""}
            />
          ))}
        </div>
      </div>
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
