import React, { Component } from "react";
import MissingContent from "../../components/MissingContent";
import { micromark } from "micromark";

export default class Post extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const recipe = await import(`../../content/recipes/${slug}.md`).catch(
      (error) => null
    );

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
      body,
    } = this.props.recipe.attributes;

    console.log(ingredients);

    return (
      <div>
        <div className="prose mt-4">
          <h2>{title}</h2>
          <div>{date}</div>
          <div>{description}</div>
          <div>{author}</div>
          <div>{prepTime}</div>
          <div>{totalTime}</div>
          <div
            dangerouslySetInnerHTML={{ __html: micromark(ingredients) }}
            // className="prose"
          />
          <img src={`../${thumbnail}`} className="h-64" />
          <div>{body}</div>
        </div>
      </div>
    );
  }
}
