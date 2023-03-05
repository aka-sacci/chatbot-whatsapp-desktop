import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';

const AuthProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthed } = useContext(AuthContext);
    const nav = useNavigate()

    isAuthed()
        .then((boolAuth) => {
            if (boolAuth === false) {
                nav("/login")
            }
    })

    return children;
};

export default AuthProtectedRoute