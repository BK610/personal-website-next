import Link from "next/link";
import {
  attributes,
  react as RecipesContent,
} from "../content/recipes/my-new-recipe.md";

export default class Recipes extends Component {
  render() {
    let { title, date, thumbnail } = attributes;
    return (
      <ul>
        {/* {recipes.map((recipe) => ( */}
        {/* <li key={recipe.id}> */}
        {/* <Link href={`/recipes/${encodeURIComponent(recipe.slug)}`}> */}
        {/* <a>{recipe.title}</a> */}
        {/* </Link> */}
        {/* </li> */}
        {/* ))} */}
      </ul>
    );
  }
}
