import {useAuth} from "../hooks/auth.hook";

export const AdminPage = () => {
    const { data, setAuthData } = useAuth()

    console.log(data, setAuthData)

    return <h1>Admin page</h1>
}