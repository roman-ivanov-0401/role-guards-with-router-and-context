import {useContext} from "react";
import {authContext} from '../contexts/auth.context'

export const useAuth = () => {
    return useContext(authContext)
}