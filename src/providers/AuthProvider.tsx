import React, {useEffect, useState} from "react";
import {authContext, AuthStateData, initialData} from "../contexts/auth.context"
import {useLocation, useNavigate, Outlet} from "react-router-dom";

const { Provider } = authContext

export default function AuthProvider() {
    const [authState, setAuthState] =
        useState<AuthStateData>(initialData)

    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(!authState.isAuth && pathname !== "login"){
            navigate("login")
        }
        else {
            navigate("home")
        }
    }, [authState.isAuth, navigate, pathname])

    return <Provider value={{data: authState, setAuthData: setAuthState}}>
        <Outlet />
    </Provider>
}