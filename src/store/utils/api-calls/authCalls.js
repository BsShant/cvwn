import { url } from "../fetch"

export const login = async (values) => {
    console.log(values)
    try {
       return fetch(`http://localhost:5000/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        }).then(res=>res.json())
        .then(data=> data)
       

    } catch (error) {
        console.log("login error: ", error)
    }
}
export const logout = () => { }