import React, { Component } from 'react';

export default class Post extends Component {
    static async getInitialProps({ query }) {
      const { slug } = query;
      const recipe = await import(`../../content/recipes/${slug}.md`).catch(error => null);
  
      return { recipe };
    }
    render() {
      if (!this.props.recipe) return <div>not found</div>;
  
      const {
        html,
        attributes: { thumbnail, title },
      } = this.props.recipe.default;
  
      return (
        <>
          <article>
            <h1>{title}</h1>
            <img src={thumbnail} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
          <style jsx>{`
            article {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
          `}</style>
        </>
      );
    }
  }