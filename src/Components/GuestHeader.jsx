import React from "react";
import { Outlet } from "react-router-dom";
import GuestNavbar from "./GuestNavbar";

export default function GuestHeader() {
    return (
        <>
            <GuestNavbar />
            <Outlet />
        </>
        
        
    )
}