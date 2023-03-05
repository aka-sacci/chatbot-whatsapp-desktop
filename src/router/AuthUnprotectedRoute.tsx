import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';

const AuthUnprotectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthed } = useContext(AuthContext);
    const nav = useNavigate()

    isAuthed()
        .then((boolAuth) => {
            if (boolAuth === true) {
                nav("/chats")
            }
    })

    return children;
};

export default AuthUnprotectedRoute