import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/common.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/router/ProtectedRoute";

import Layout from "./layouts/Layout";
import AdminLayout from "./layouts/AdminLayout";
import Main from "./pages/main/Main";
import AdminMain from "./pages/admin/AdminMain";
import ErrorPage from "./pages/error/Error";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import UserInfo from "./pages/user/UserInfo";
import KakaoAuth from "./pages/user/KakaoAuth";
import SchedulesList from "./pages/schedule/SchedulesList";
import ScheduleDetail from "./pages/schedule/ScheduleDetail";
import ScheduleForm from "./components/form/ScheduleForm";
import ScheduleRegist from "./pages/schedule/ScheduleRegist";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    {/* 비회원  */}
                    <Route path="/signup" element={<ProtectedRoute isAuthenticated={false}> <Signup /> </ProtectedRoute>} />
                    <Route path="/login" element={<ProtectedRoute isAuthenticated={false}> <Login /></ProtectedRoute>} />
                    <Route path="/login/oauth2/code/kakao" element={<ProtectedRoute isAuthenticated={false}> <KakaoAuth /></ProtectedRoute>} />

                    {/* 회원 */}
                    {/* settings/ */}
                    {/* mypage : 프로필 정보.. 내가 작성한 목록 등? */}
                    <Route path="/mypage">
                        <Route index element={<ProtectedRoute isAuthenticated={true}> <UserInfo /> </ProtectedRoute>} />
                        <Route path="settings" element={<ProtectedRoute isAuthenticated={true}> <UserInfo /> </ProtectedRoute>} />
                    </Route>
                    <Route path="/travels" />
                    <Route path="/schedules" element={<SchedulesList />} />
                    <Route path="/schedules/:scheduleId" element={<ScheduleDetail/>} />
                    <Route path="/schedules/regist" element={<ScheduleRegist/>} />
                    <Route path="/companions" />
                    <Route path="/inquiry" />
                    {/* 오류 */}
                    <Route path="*" element={<ErrorPage />} />
                </Route>
                {/* 관리자 */}
                <Route path="/admin" element={<ProtectedRoute isAuthenticated={true} isAdminOnly={true}> <AdminLayout /> </ProtectedRoute>}>
                    <Route index element={<AdminMain />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
