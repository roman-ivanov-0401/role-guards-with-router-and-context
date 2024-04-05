import {RouterProvider} from "react-router-dom";
import {routes} from "../routes";

export const AuthRouterProvider = () => {
    return <RouterProvider router={routes}/>
}