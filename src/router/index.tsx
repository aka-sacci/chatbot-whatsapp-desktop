import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthContextProvider } from '../providers/AuthProvider';
import AuthProtectedRoute from './AuthProtectedRoute';
import AuthUnprotectedRoute from './AuthUnprotectedRoute';
import GetActive from './GetActive';
import checkMobile from '../utils/checkMobile';
import Chats from 'pages/Chats';
import { SessionContextProvider } from 'providers/SessionProvider';

const isMobileDevice = checkMobile();

const Router = () => {
    return (
        <AuthContextProvider>
            <SessionContextProvider>
                <Routes>
                    <Route path='/login' element={
                        <AuthUnprotectedRoute>
                            <Login isMobileDevice={isMobileDevice} />
                        </AuthUnprotectedRoute>} />
                    <Route path='/chats' element={
                        <AuthProtectedRoute>
                            <GetActive>
                                <Chats isMobileDevice={isMobileDevice} />
                            </GetActive>
                        </AuthProtectedRoute>
                    } />
                    <Route path='*' element={<p>Caminho errado!</p>} />
                </Routes>
            </SessionContextProvider>
        </AuthContextProvider>
    )
}

export default Router