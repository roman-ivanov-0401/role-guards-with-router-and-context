import {useAuth} from "../hooks/auth.hook";
import {login} from "../services/auth.service";

export const LoginPage = () => {
    const { data, setAuthData } = useAuth()

    console.log(data, setAuthData)

    const clickHandler = () => {
        login().then(res => setAuthData(res))
    }

    return <>
        <h1>Login page</h1>
        <button onClick={clickHandler}>Login!</button>
    </>
}