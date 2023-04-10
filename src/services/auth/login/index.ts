import { iLoginProps, iServiceDefault } from "../../../@types/myTypes";
import axios from "axios";
axios.defaults.withCredentials = true

export default async function login(props: iLoginProps): Promise<String> {
    const { usid, password } = props

    let token = await axios.post('http://localhost:3333/auth/login', {
        usid,
        password
    }, { withCredentials: true })
        .then((response: iServiceDefault) => {
            switch (response.status) {
                case 200:
                    return String(response.data.token)
                default:
                    let errorToBeThrown = new Error()
                    errorToBeThrown.message = "Unknown error! http requisition status should be 200, not " + response.status + "."
                    errorToBeThrown.name = "ERR_WRONG_HTTP_CODE"
                    throw errorToBeThrown
            }

        }).catch((err: Error) => {
            let errorToBeThrown = new Error()
            let errorMessage = err.message
            if (errorMessage.substring(errorMessage.length - 3) === "404") {
                let conflictErrorToBeThrown = new Error()
                conflictErrorToBeThrown.message = "ID US ou senha inválidos!"
                conflictErrorToBeThrown.name = "ERR_WRONG_CREDENTIALS"
                throw conflictErrorToBeThrown
            }
            errorToBeThrown.message = errorMessage
            errorToBeThrown.name = "INTERNAL_ERROR"
            throw errorToBeThrown
        })
    return token
}   