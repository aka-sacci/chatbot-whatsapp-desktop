import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthContextProvider } from '../providers/AuthProvider';
import AuthProtectedRoute from './AuthProtectedRoute';
import AuthUnprotectedRoute from './AuthUnprotectedRoute';
import checkMobile from '../utils/checkMobile';
import Chats from 'pages/Chats';

const isMobileDevice = checkMobile();

const Router = () => {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path='/login' element={
                    <AuthUnprotectedRoute>
                        <Login isMobileDevice={isMobileDevice} />
                    </AuthUnprotectedRoute>} />
                <Route path='/chats' element={
                    <AuthProtectedRoute>
                        <Chats isMobileDevice={isMobileDevice}/>
                    </AuthProtectedRoute>
                } />
                <Route path='*' element={<p>Caminho errado!</p>}/>
            </Routes>
        </AuthContextProvider>
    )
}

export default Router