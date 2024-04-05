import { AuthStateData } from "../contexts/auth.context"

export const login = async (): Promise<AuthStateData> => {
    return {
        accessToken: "blablabla",
        refreshToken: "lalalalalal",
        isAuth: true
    };
}

export const logout = async (): Promise<AuthStateData> => {
    return {
        accessToken: "",
        refreshToken: "",
        isAuth: false
    }
}