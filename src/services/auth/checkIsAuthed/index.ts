import axios from "axios";
axios.defaults.withCredentials = true

async function checkIsAuthed(): Promise<boolean> {
    const result: boolean = await axios.get('http://localhost:3333/auth/isauthed', { withCredentials: true })
        .then(() => {
            return true
        })
        .catch(() => {
            return false
        })
        return result
}

export default checkIsAuthed