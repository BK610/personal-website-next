import Link from "next/link";
import React, { Component } from "react";

const importRecipes = async () => { // From https://github.com/masives/netlifycms-nextjs/blob/master/pages/blog/index.js
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

export default class Recipes extends Component {
  static async getInitialProps() {
    const recipesList = await importRecipes();
    console.log(recipesList);
    return { recipesList };
  }

  render() {
    const { recipesList } = this.props;
    console.log("Rendering list of recipes...");
    return (
      <>
        <ul>
          {recipesList.map((recipe, k) => (
            <li key={k}>
              <div>
                <Link href={`recipes/recipe/${recipe.slug}`}>
                  <div>
                    <h2>{recipe.attributes.title}</h2>
                    <p>{recipe.attributes.date}</p>
                    <img src={recipe.attributes.thumbnail} height="100px"/>
                    <a>Click Here!</a>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
