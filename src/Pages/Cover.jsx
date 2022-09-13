import React from "react"
import { Link } from "react-router-dom"
import "../Assets/Cover.css"
export default function Cover() {
    return(
        <div>
            <section className='bg-brand pt-32 h-screen'>
                <div className='container-center text-white py-32 px-64'>
                    <h1 className="py-4 text-6xl text-extrabold text-center">Recipe Search</h1>
                    <p className="py-4 text-center text-2xl">
                    Look for the recipes you want to cook. This website provides a recipe api to help or guide our fellow aspiring cooks.
                    </p>
                    <div className="py-5 text-center">
                        <Link to="/login" className="bg-violet-500 hover:bg-violet-700 text-white text-xl font-bold py-4 px-6 rounded-full">
                                Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}