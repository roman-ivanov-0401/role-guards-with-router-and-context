import React, {createContext, SetStateAction} from "react";

export interface AuthStateData {
    accessToken: string;
    refreshToken: string;
    isAuth: boolean;
}
interface AuthContextState {
    data: AuthStateData;
    setAuthData: React.Dispatch<SetStateAction<AuthStateData>>
}

export const initialData: AuthStateData = {
    accessToken: "",
    refreshToken: "",
    isAuth: false
}

const initialContextState: AuthContextState = {
    data: initialData,
    setAuthData: () => initialData
}


export const authContext = createContext<AuthContextState>(initialContextState)