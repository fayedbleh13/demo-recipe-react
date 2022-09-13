import React from "react"
import RecipeCard from "./RecipeCard"

export default function RecipeList({ recipes }) {
    return (
        <div className="grid grid-cols-4 gap-6">
            {recipes.map(recipes => (
                <RecipeCard 
                    key={recipes.recipe.label}
                    ingredients={recipes.recipe.ingredients}
                    calories={recipes.recipe.calories}
                    title={recipes.recipe.label}
                    image={recipes.recipe.image}
                    cuisineType={recipes.recipe.cuisineType}
                    mealType={recipes.recipe.mealType}
                    dishType={recipes.recipe.dishType}
                />
            ))}
        </div>
    )
}