import {useAuth} from "../hooks/auth.hook";
import {logout} from "../services/auth.service";

export const HomePage = () => {
    const { data, setAuthData } = useAuth()

    console.log(data, setAuthData)

    const handleClick = () => {
        logout().then(res => setAuthData(res))
    }

    return <>
        <h1>Home page</h1>
        <button onClick={handleClick}>Log out!</button>
    </>
}