import { iSetActivityStatusProps, iServiceDefault, iSessionProvider } from '../@types/myTypes';
import { createContext } from 'react';
import getActivityStatus from 'services/session/getActivityStatus';
import setActivityStatus from 'services/session/setActivityStatus';


let DEFAULT_VALUE: iSessionProvider = {
    setActivityStatus: async () => { },
    getActivityStatus: async () => false
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

    const handleGetActivityStatus = async (): Promise<boolean> => {
        let activity = await getActivityStatus()
            .then((res: iServiceDefault) => {
                return Boolean(res.data.isSessionActive)
            })
            .catch((err: Error) => {
                let defaultErrorToBeThrown = new Error()
                defaultErrorToBeThrown.message = err.message
                defaultErrorToBeThrown.name = err.name
                throw defaultErrorToBeThrown
            })
        return activity
    };

    const value: iSessionProvider = {
        setActivityStatus: handleSetActivityStatus,
        getActivityStatus: handleGetActivityStatus
    };

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
};

export { SessionContextProvider, SessionContext }