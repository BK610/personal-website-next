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

    console.log(this.props.recipe);
    return (
      <div>
        Hello?
        <h1>{this.props.recipe.attributes.title}</h1>
        <img src={`../${this.props.recipe.attributes.thumbnail}`} /> 
        <div>{this.props.recipe.attributes.body}</div>
      </div>
    );
  }
}
