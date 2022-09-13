
import React from "react"
import { useNavigate, useLocation } from "react-router-dom";
import BackLogo from "../Components/Backlogo";
import Button from "../Components/Button";
import Image from "../Components/Image";
import "../Assets/Button.css"

export default function RecipeDetails() {
    const navigate = useNavigate()

    const location = useLocation()
    const { 
        title,
        image,
        calories, 
        ingredients,
        cuisineType,
        mealType,
        dishType,

    } = location.state
   
    return (
        <div className="p-[68px]">
            <div className="absolute top-20 left-16">
                <Button className="align-center default-btn" handleClick={() => navigate(-1)}>
                    <BackLogo />
                    Back to prev
                </Button>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:w-5xl h-[450px] rounded-lg bg-white drop-shadow-lg">
                    <Image className="h-96 md:h-auto object-cover md:rounded-none md:rounded-l-lg" src={image} alt="recipe_image"/>
                    <div className="p-6 flex flex-col justify-start">
                        <h1 className="text-gray-900 text-2xl font-bold mb-2">{title}</h1>
                        <div className="mb-2.5 flex space-x-2 justify-left">
                            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full">{cuisineType}</span>
                            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full">{mealType}</span>
                            <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded-full">{dishType}</span>
                        </div>
                        <span className="mb-2 text-sm py-2 px-3 w-[190px] leading-none text-center whitespace-nowrap align-baseline font-bold bg-violet-500  text-white rounded">{calories.toFixed()} Calories</span>
                        <hr className="my-2"/>
                        
                        <p className=" text-gray-900 text-medium text-xl font-semibold">Ingredients</p>
                        <ol className="text-gray-700 text-sm tracking-normal leading-tight mt-3 list-inside list-disc">
                            {ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}