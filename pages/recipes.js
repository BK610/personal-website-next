import Link from 'next/link'

function Recipes({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/recipes/${encodeURIComponent(recipe.slug)}`}>
            <a>{recipe.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Recipes