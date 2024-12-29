import React, { Component } from "react";
import MissingContent from "../../components/MissingContent";
import { micromark } from "micromark";
import BaseLayout from "../../components/BaseLayout";
import { getSheetsCSV, parseCSV } from "../../lib/sheetsConnector";

export default class Recipe extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;

    const recipesCsv = await getSheetsCSV(
      process.env.NEXT_PUBLIC_RECIPES_DATA_URL
    );
    const recipesJson = parseCSV(recipesCsv);

    // TODO: Pulling all recipe data just to search for the one that matches the slug is inefficient.
    //   Consider pulling these once, elsewhere, and passing the correct recipe to this component.
    const recipe = recipesJson.data.find((recipe) => recipe.slug === slug);

    return { recipe };
  }

  render() {
    if (!this.props.recipe) return <MissingContent />;

    const {
      title,
      date,
      thumbnail,
      description,
      author,
      prepTime,
      totalTime,
      ingredients,
      content,
    } = this.props.recipe;

    const dateObj = new Date(date);

    return (
      <BaseLayout>
        <div className="prose prose-stone dark:prose-invert mt-4">
          <h1>{title}</h1>
          <div className="border-b border-b-stone-500">
            <span className="no-underline">{description}</span>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 sm:col-span-1 place-self-center">
              <img
                className="rounded-lg object-contain max-h-72"
                src={`../${thumbnail}`}
              />
            </div>
            <div className="col-span-2 sm:col-span-1 grid grid-cols-2 sm:grid-cols-3 space-x-2 self-center">
              <div className="justify-self-end text-right underline decoration-1">
                <div>Author</div>
                <div>Prep Time</div>
                <div>Total Time</div>
                <div>Published</div>
              </div>
              <div className="col-span-1 sm:col-span-2 justify-end">
                <div>{author}</div>
                <div>{prepTime} min</div>
                <div>{totalTime} min</div>
                <div>
                  {dateObj.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Ingredients</h2>
            <div
              className="select-all"
              dangerouslySetInnerHTML={{ __html: micromark(ingredients) }}
            />
          </div>
          <div>
            <h2>Recipe</h2>
            <div dangerouslySetInnerHTML={{ __html: micromark(content) }} />
          </div>
        </div>
      </BaseLayout>
    );
  }
}
