import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/common.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/router/ProtectedRoute";

import Layout from "./layouts/Layout";
import AdminLayout from "./layouts/AdminLayout";
import Main from "./pages/main/Main";
import AdminMain from "./pages/admin/main/AdminMain";
import ErrorPage from "./pages/error/Error";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import UserInfo from "./pages/user/UserInfo";
import KakaoAuth from "./pages/user/KakaoAuth";
import SchedulesList from "./pages/schedule/SchedulesList";
import ScheduleDetail from "./pages/schedule/ScheduleDetail";
import ScheduleRegist from "./pages/schedule/ScheduleRegist";
import TravelMain from "./pages/travel/TravelMain";
import TravelDetail from "./pages/travel/TravelDetail";
import AdminUsers from "./pages/admin/user/AdminUsers";
import AdminUserDetail from "./pages/admin/user/AdminUserDetail";
import AdminUserRegist from "./pages/admin/user/AdminUserRegist";
import AdminUserDelete from "./pages/admin/user/AdminUserDelete";
import AdminInquiries from "./pages/admin/inquiry/AdminInquiries";
import AdminInquiryDetail from "./pages/admin/inquiry/AdminInquiryDetail";
import AdminInquiryRegist from "./pages/admin/inquiry/AdminInquiryRegist";
import AdminCategories from "./pages/admin/category/AdminCategories";
import AdminCategoryRegist from "./pages/admin/category/AdminCategoryRegist";
import AdminCategoryModify from "./pages/admin/category/AdminCategoryModify";
import TravelRegist from "./pages/travel/TravelRegist";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    {/* 비회원  */}
                    <Route path="/signup"
                           element={<ProtectedRoute isAuthenticated={false}> <Signup/> </ProtectedRoute>}/>
                    <Route path="/login" element={<ProtectedRoute isAuthenticated={false}> <Login/></ProtectedRoute>}/>
                    <Route path="/login/oauth2/code/kakao"
                           element={<ProtectedRoute isAuthenticated={false}> <KakaoAuth/></ProtectedRoute>}/>

                    {/* 회원 */}
                    {/* settings/ */}
                    {/* mypage : 프로필 정보.. 내가 작성한 목록 등? */}
                    <Route path="/mypage">
                        <Route index element={<ProtectedRoute isAuthenticated={true}> <UserInfo/> </ProtectedRoute>}/>
                        <Route path="settings"
                               element={<ProtectedRoute isAuthenticated={true}> <UserInfo/> </ProtectedRoute>}/>
                    </Route>
                    <Route path="/travels" element={ <TravelMain />} />
                    <Route path="/travel/:travelId" element={ <TravelDetail />} />
                    <Route path="/travels/regist" element={ <TravelRegist />} />
                    <Route path="/schedules" element={<SchedulesList />} />
                    <Route path="/schedules/:scheduleId" element={<ScheduleDetail/>} />
                    <Route path="/schedules/regist" element={<ScheduleRegist/>} />
                    <Route path="/companions" />
                    <Route path="/inquiry" />
                    {/* 오류 */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
                {/* 관리자 */}
                <Route path="/admin" element={<ProtectedRoute isAuthenticated={true} isAdminOnly={true}> <AdminLayout/>
                </ProtectedRoute>}>
                    <Route index element={<AdminMain/>}/>
                    <Route path="users">
                        <Route index element={<AdminUsers/>}/>
                        <Route path="detail" element={<AdminUserDetail/>}/>
                        <Route path="regist" element={<AdminUserRegist/>}/>
                        <Route path="delete" element={<AdminUserDelete/>}/>
                    </Route>
                    <Route path="inquires">
                        <Route index element={<AdminInquiries/>}/>
                        <Route path="detail" element={<AdminInquiryDetail/>}/>
                        <Route path="regist" element={<AdminInquiryRegist/>}/>
                    </Route>
                    <Route path="categories">
                        <Route index element={<AdminCategories/>}/>
                        <Route path="detail" element={<AdminCategoryModify/>}/>
                        <Route path="regist" element={<AdminCategoryRegist/>}/>
                    </Route>
                    <Route path="notices"/>

                    {/* 오류 */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
