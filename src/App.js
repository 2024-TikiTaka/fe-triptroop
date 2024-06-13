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
import KakaoAuth from "./pages/user/KakaoAuth";
import SchedulesList from "./pages/schedule/SchedulesList";
import ScheduleDetail from "./pages/schedule/ScheduleDetail";
import MyUserInfo from "./pages/settings/MyUserInfo";
import ScheduleRegist from "./pages/schedule/ScheduleRegist";
import TravelMain from "./pages/travel/TravelMain";
import TravelDetail from "./pages/travel/TravelDetail";
import AdminUsers from "./pages/admin/user/AdminUsers";
import AdminUserDetail from "./pages/admin/user/AdminUserDetail";
import AdminUserRegist from "./pages/admin/user/AdminUserRegist";
import AdminUserDelete from "./pages/admin/user/AdminUserDelete";
import AdminInquiries from "./pages/admin/inquiry/AdminInquiries";
import AdminInquiryDetail from "./pages/admin/inquiry/AdminInquiryDetail";
import AdminInquiryRegister from "./pages/admin/inquiry/AdminInquiryRegister";
import AdminCategories from "./pages/admin/category/AdminCategories";
import AdminCategoryRegist from "./pages/admin/category/AdminCategoryRegist";
import AdminCategoryModify from "./pages/admin/category/AdminCategoryModify";
import MyPageLayout from "./layouts/MyPageLayout";
import MyPageMain from "./pages/mypage/MyPageMain";
import TravelRegist from "./pages/travel/TravelRegist";
import TravelModifyForm from "./components/form/TravelModifyForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>

                    {/* 비회원 ============================= */}
                    <Route path="/signup"
                           element={<ProtectedRoute isAuthenticated={false}> <Signup/> </ProtectedRoute>}/>
                    <Route path="/login" element={<ProtectedRoute isAuthenticated={false}> <Login/></ProtectedRoute>}/>
                    <Route path="/login/oauth2/code/kakao"
                           element={<ProtectedRoute isAuthenticated={false}> <KakaoAuth/></ProtectedRoute>}/>

                    {/* 회원 ============================= */}

                    {/* 여행지 소개 */}
                    <Route path="/travels" element={<TravelMain/>}/>
                    <Route path="/travel/:travelId" element={<TravelDetail/>}/>
                    <Route path="/travels/regist" element={<TravelRegist/>}/>
                    <Route path="/travels/modify/:travelId" element={<TravelModifyForm/>}/>
                    {/* 일정 */}
                    <Route path="/schedules" element={<SchedulesList/>}/>
                    <Route path="/schedules/:scheduleId" element={<ScheduleDetail/>}/>
                    <Route path="/schedules/regist" element={<ScheduleRegist/>}/>
                    {/* 동행 */}
                    <Route path="/companions"/>
                    {/* 문의 */}
                    <Route path="/inquiry"/>
                    {/* 오류 */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>

                {/* 마이페이지 */}
                <Route path="/mypage"
                       element={<ProtectedRoute isAuthenticated={true}> <MyPageLayout/></ProtectedRoute>}>
                    <Route index element={<MyPageMain/>}/>

                    {/* <Route path="settings" element={<ProtectedRoute isAuthenticated={true}> <UserInfo /> </ProtectedRoute>} /> */}
                </Route>
                {/* 설정/ */}
                <Route path="/settings"
                       element={<ProtectedRoute isAuthenticated={true}> <MyPageLayout/></ProtectedRoute>}>
                    <Route index element={<MyUserInfo/>}/>
                </Route>

                {/* 관리자 ============================= */}
                <Route path="/admin" element={<ProtectedRoute isAuthenticated={true} isAdminOnly={true}> <AdminLayout/>
                </ProtectedRoute>}>
                    <Route index element={<AdminMain/>}/>
                    <Route path="users">
                        <Route index element={<AdminUsers/>}/>
                        <Route path=":userId" element={<AdminUserDetail/>}/>
                        <Route path="regist" element={<AdminUserRegist/>}/>
                        <Route path="delete" element={<AdminUserDelete/>}/>
                    </Route>
                    <Route path="inquires">
                        <Route index element={<AdminInquiries/>}/>
                        <Route path="inquiryId" element={<AdminInquiryDetail/>}/>
                        <Route path="regist" element={<AdminInquiryRegister/>}/>
                    </Route>
                    <Route path="categories">
                        <Route index element={<AdminCategories/>}/>
                        <Route path="categoryId" element={<AdminCategoryModify/>}/>
                        <Route path="regist" element={<AdminCategoryRegist/>}/>
                    </Route>
                    <Route path="notices"/>
                    {/*<Route path="test" element={<TestDl/>}/>*/}

                    {/* 오류 */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
