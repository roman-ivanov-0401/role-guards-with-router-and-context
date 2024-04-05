import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import {AdminPage} from "./pages/AdminPage";
import AuthProvider from "./providers/AuthProvider";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <AuthProvider/>,
        children: [
            {
                path: 'home',
                element: <HomePage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: 'admin',
                element: <AdminPage/>
            }
        ]
    },

])