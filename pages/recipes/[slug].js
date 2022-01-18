import React, { Component } from "react";
import MissingContent from "../../components/MissingContent";

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
      ingredients
    } = this.props.recipe.attributes;

    return (
      <div>
        <h1>{title}</h1>
        <div>{date}</div>
        <div>{description}</div>
        <div>{author}</div>
        <div>{prepTime}</div>
        <div>{totalTime}</div>
        {/* <ul>
          {ingredients.map((ingredient, k) => (
            <li key={k}>{ingredient}</li>
          ))}
        </ul> */}
        <img src={`../${thumbnail}`} className="h-64" />
      </div>
    );
  }
}
