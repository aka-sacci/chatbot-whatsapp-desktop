import { iServiceDefault } from "../../../@types/myTypes";
import axios from "axios";
axios.defaults.withCredentials = true

export default async function getActivityStatus(): Promise<iServiceDefault> {
    let response = await axios.post('http://localhost:3333/session/sessionactivitygetter', {
    }, { withCredentials: true })
        .then((response: iServiceDefault) => {
            return response
        }).catch((err: Error) => {
            let errorCode = err.message.substring(err.message.length - 3)
            let errorResponse: iServiceDefault = {
                status: Number(errorCode),
                data: {
                    error: err
                }
            }
            return errorResponse
        })
        
    return response
}