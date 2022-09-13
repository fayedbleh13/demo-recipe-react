import React from 'react';
import { Link} from 'react-router-dom';
import "../Assets/Button.css"
import Image from './Image';

export default function RecipeCard( props ) {
    return (
        <div>
            <div className="rounded-lg border-gray-200 drop-shadow-lg bg-white max-w-sm">
                <Image className="" src={props.image} alt="recipe_image" />
                <div className="flex flex-col justify-center items-center  p-6">
                    <h5 className="text-gray-900 text-base font-medium mb-2 break-all">{props.title}</h5>
                    <Link 
                        to='/recipe-details' 
                        state={{ 
                            title: props.title,
                            image: props.image,
                            calories: props.calories, 
                            ingredients: props.ingredients,
                            cuisineType: props.cuisineType,
                            mealType: props.mealType,
                            dishType: props.dishType,
                        }} 
                        className="inline-block align-center default-btn"
                    >
                    More Details
                    </Link>
                </div>
            </div>
        </div>
    )
}