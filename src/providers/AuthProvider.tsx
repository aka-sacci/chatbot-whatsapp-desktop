import { createContext } from 'react';
import login from '../services/auth/login';
import { iAuthProvider, iLoginProps } from '../@types/myTypes';
import logout from '../services/auth/logout';
import checkIsAuthed from '../services/auth/checkIsAuthed';

let DEFAULT_VALUE: iAuthProvider = {
    onLogin: async () => { },
    onLogout: async () => { },
    isAuthed: async () => false,
}

const AuthContext = createContext<iAuthProvider>(DEFAULT_VALUE);

const AuthContextProvider = ({ children }: { children: JSX.Element }) => {

    const handleLogin = async (props: iLoginProps) => {
        await login(props)
            .then()
            .catch((err: Error) => {
                let defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = err.name
                throw defaultErrorToBeThrown
            })
    };

    const handleLogout = async () => {
        await logout()
            .then()
            .catch((err: Error) => {
                let defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = err.name
                throw defaultErrorToBeThrown
            })

    };

    const handleIsAuthed = async () => {
        let isAuthed = await checkIsAuthed()
            .then((isAuthedResult: boolean) => { return isAuthedResult })
            .catch((err: Error) => {
                let defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = err.name
                throw defaultErrorToBeThrown
            })
        return isAuthed;
    }

    const value: iAuthProvider = {
        onLogin: handleLogin,
        onLogout: handleLogout,
        isAuthed: handleIsAuthed
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};



export { AuthContextProvider, AuthContext }