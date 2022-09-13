import React, { useState } from "react"
import Button from "./Button"
import Input from "./Input"
import "../Assets/Search.css"
import "../Assets/Button.css"
import { toast } from "react-hot-toast"

export default function Search({ setQuery }) {
    
    const [search, setSearch] = useState("")
    
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-1/2">
                    <form onSubmit={getSearch}>
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <Input 
                                onChange={updateSearch}
                                value={search}
                                type="search"
                                className="form-control search-input"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon3"
                            />
                            <Button type="submit" className="btn align-center default-btn inline-block" id="button-addon3">Search</Button>
                        </div>
                    </form>
                </div>
            </div> 
        </>
    )
}