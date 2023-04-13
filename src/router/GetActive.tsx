import { useContext } from 'react';
import { SessionContext } from '../providers/SessionProvider';

const GetActive = ({ children }: { children: JSX.Element }) => {
    const { getActivityStatus } = useContext(SessionContext)

    getActivityStatus()
        .then((boolActivity) => {
            sessionStorage.setItem('active', String(boolActivity))
    }).catch()

    return children;
};

export default GetActive