import { iSetActivityStatusProps, iServiceDefault, iSessionProvider } from '../@types/myTypes';
import { createContext } from 'react';
import setActivityStatus from 'services/session/setActivityStatus';


let DEFAULT_VALUE: iSessionProvider = {
    setActivityStatus: async () => {}
}

const SessionContext = createContext<iSessionProvider>(DEFAULT_VALUE);

const SessionContextProvider = ({ children }: { children: JSX.Element }) => {

    const handleSetActivityStatus = async (props: iSetActivityStatusProps) => {
        await setActivityStatus(props)
            .then()
            .catch((err: Error) => {
                let defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = err.name
                throw defaultErrorToBeThrown
            })
    };

    const value: iSessionProvider = {
        setActivityStatus: handleSetActivityStatus
    };

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
};



export { SessionContextProvider, SessionContext }