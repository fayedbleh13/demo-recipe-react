import React, { useState, useEffect } from 'react'
import Search from '../Components/Search'
import RecipeList from '../Components/RecipeList'
import Pagination from '../Components/Pagination'
import "../Assets/Dashboard.css"

export default function Dashboard() {

    // edamam api id and keys
    const APP_ID = "6bb7fc6c";
    const APP_KEY = "3ed382e10877598830cb16c8939ca7ad";

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('chicken')

     // pagination 
     const [currentPage, setCurrentPage] = useState(1)
     const [itemsPerPage, setitemsPerPage] = useState(8)
 
     const lastDataIndex = currentPage * itemsPerPage
     const firstDataIndex = lastDataIndex - itemsPerPage
     const currentData = recipes.slice(firstDataIndex, lastDataIndex)
    
    useEffect( () => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json()
        setRecipes(data.hits)
    };

    return (
        <div>
            <div className='px-32 pt-16 pb-9'>
                {/* search input */}
                <Search setQuery={setQuery}/>

                {/* recipe list below */}
                <RecipeList recipes={currentData} />

                {/* pagination below */}
                <Pagination totalData={recipes.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </div>
        
    )
}