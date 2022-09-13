import React, { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    
    const { currentUser } = useContext(AuthContext)

    if (!!currentUser) {
        return children
    }

    return <Navigate to='/' />
}

export default PrivateRoute