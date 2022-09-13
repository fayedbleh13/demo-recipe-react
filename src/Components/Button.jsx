import React from "react"

export default function Button({ type, className, handleClick, id, children }) {
    return (
        <>
            <button 
                type={type} 
                className={className}
                onClick={handleClick}
                id={id} 
            >
            {children}
            </button>
        </>
    )
}