import { LoginResponseInterface } from "../Interface/ResponsesInterfaces";
import axios from "axios";

// export default function useLogin() {
//     return (username: string, password: string): Promise<LoginResponseInterface> => {
//         return fetch('http://localhost:2345/login.php', {
//             method: 'GET',
//             mode: 'cors',
//             credentials: "include",
//             headers: {
//                 Authorization: `Basic ${btoa(username + ':' + password)}`
//             }
//         })
//             .then(res => res.json())
//     }
// }

export default function useLogin() {
    return (username: string, password: string): Promise<LoginResponseInterface> => {
        return axios.get("http://localhost:2345/login.php",
            {
                withCredentials: true,
                auth: {
                    username: username,
                    password: password
                }
            }
        )
            .then(res => res.data)
    }
}

