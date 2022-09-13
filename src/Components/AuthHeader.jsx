import React from "react"
import { Outlet } from "react-router-dom"
import AuthNavbar from "./AuthNavbar";

export default function AuthHeader() {
    return (
        <>
            <AuthNavbar />
                <Outlet />
        </>
    )
}