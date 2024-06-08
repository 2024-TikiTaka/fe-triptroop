import { Navigate } from 'react-router-dom';
import { isAdmin, isLogin } from '../../utils/TokenUtils';

function ProtectedRoute({ isAuthenticated = true, isAdminOnly = true, children }) {
    if (isAuthenticated) {

        /* 관리자 */
        if (isAdminOnly) {
            return isAdmin() ? children : <Navigate to="/" />;
        }

        return isLogin() ? children : <Navigate to="/login" />;
    } else {
        return !isLogin() ? children : <Navigate to="/" />;
    }
}

export default ProtectedRoute;
