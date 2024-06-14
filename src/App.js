import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/common.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/router/ProtectedRoute";

import ErrorPage from "./pages/error/Error";
import Layout from "./layouts/Layout";
import Main from "./pages/main/Main";
import Login from "./pages/user/Login";
import KakaoAuth from "./pages/user/KakaoAuth";
import SchedulesList from "./components/list/SchedulesList";
import ScheduleDetail from "./pages/schedule/ScheduleDetail";
import ScheduleRegist from "./pages/schedule/ScheduleRegist";
import TravelMain from "./pages/travel/TravelMain";
import TravelDetail from "./pages/travel/TravelDetail";
import AdminLayout from "./layouts/AdminLayout";
import AdminMain from "./pages/admin/AdminMain";
import AdminUsers from "./pages/admin/user/AdminUsers";
import AdminUserDetail from "./pages/admin/user/AdminUserDetail";
import AdminUserRegist from "./pages/admin/user/AdminUserRegist";
import AdminUserDelete from "./pages/admin/user/AdminUserDelete";
import AdminInquiries from "./pages/admin/inquiry/AdminInquiries";
import AdminInquiryDetail from "./pages/admin/inquiry/AdminInquiryDetail";
import AdminCategories from "./pages/admin/category/AdminCategories";
import AdminCategoryRegist from "./pages/admin/category/AdminCategoryRegist";
import AdminCategoryModify from "./pages/admin/category/AdminCategoryModify";
import ProfileSettings from "./pages/settings/ProfileSettings";
import UserSettings from "./pages/settings/UserSettings";
import PasswordSettings from "./pages/settings/PasswordSettings";
import ReportSettings from "./pages/settings/ReportSettings";
import Withdrawal from "./pages/settings/Withdrawal";
import MyPageLayout from "./layouts/MyPageLayout";
import MyHome from "./pages/mypage/MyHome";
import MyLikes from "./pages/mypage/MyLikes";
import MySchedules from "./pages/mypage/MySchedules";
import MyTravels from "./pages/mypage/MyTravels";
import TravelRegist from "./pages/travel/TravelRegist";
import ScheduleUpdate from "./pages/schedule/ScheduleUpdate";
import ScheduleItemUpdate from "./pages/schedule/ScheduleItemUpdate";
import ScheduleRemove from "./pages/schedule/ScheduleRemove";
import ScheduleItemRemove from "./pages/schedule/ScheduleItemRemove";
import ScheduleApply from "./pages/schedule/ScheduleApply";
import ScheduleRejected from "./pages/schedule/ScheduleRejected";
import ScheduleParticipant from "./pages/schedule/ScheduleParticipant";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />

                    {/* 비회원 ============================= */}
                    <Route
                        path="/signup"
                        element={
                            <ProtectedRoute isAuthenticated={false}>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <ProtectedRoute isAuthenticated={false}>
                                <Login />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/login/oauth2/code/kakao"
                        element={
                            <ProtectedRoute isAuthenticated={false}>
                                <KakaoAuth />
                            </ProtectedRoute>
                        }
                    />

                    {/* 회원 ============================= */}

                    {/* 여행지 소개 */}
                    <Route path="/travels" element={<TravelMain />} />
                    <Route path="/travel/:travelId" element={<TravelDetail />} />
                    <Route path="/travels/regist" element={<TravelRegist />} />
                    <Route
                        path="/travels/modify/:travelId"
                        element={<TravelModifyForm />}
                    />
                    {/* 일정 */}
                    <Route path="/schedules" element={<SchedulesList />} />
                    <Route path="/schedules/:scheduleId" element={<ScheduleDetail />} />
                    <Route path="/schedules/:scheduleId/schedulesParticipantList" element={<ScheduleParticipant />} />
                    <Route path="/schedules/:scheduleId/modify" element={<ScheduleUpdate />} />
                    <Route path="/schedules/:scheduleId/remove" element={<ScheduleRemove />} />
                    <Route path="/schedules/:scheduleId/apply" element={<ScheduleApply />} />
                    {/*<Route path="/schedules/:scheduleParticipantId/accept" element={<ScheduleAccept/>} />*/}
                    <Route path="/schedules/:scheduleParticipantId/rejected" element={<ScheduleRejected />} />
                    <Route path="/schedules/:scheduleItemId/remove-item" element={<ScheduleItemRemove />} />
                    <Route path="/schedules/:scheduleItemId/item" element={<ScheduleItemUpdate />} />
                    <Route path="/schedules/regist" element={<ScheduleRegist />} />
                    {/* 동행 */}
                    <Route path="/companions" />
                    {/* 문의 */}
                    <Route path="/inquiry" />
                    {/* 오류 */}
                    <Route path="*" element={<ErrorPage />} />
                </Route>

                {/* 마이페이지 */}
                <Route
                    path="/mypage"
                    element={
                        <ProtectedRoute isAuthenticated={true}>
                            <MyPageLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<MyHome />} />
                    <Route path="home" element={<MyHome />} />
                    <Route path="travels" element={<MyTravels />} />
                    <Route path="schedules" element={<MySchedules />} />
                    <Route path="likes" element={<MyLikes />} />
                </Route>
                {/* 설정/ */}
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute isAuthenticated={true}>
                            <MyPageLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<ProfileSettings />} />
                    <Route path="profile" element={<ProfileSettings />} />
                    <Route path="user" element={<UserSettings />} />
                    <Route path="password" element={<PasswordSettings />} />
                    <Route path="report" element={<ReportSettings />} />
                    <Route path="withdrawal" element={<Withdrawal />} />
                </Route>

                {/* 관리자 ============================= */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute isAuthenticated={true} isAdminOnly={true}>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<AdminMain />} />
                    <Route path="users">
                        <Route index element={<AdminUsers />} />
                        <Route path=":userId" element={<AdminUserDetail />} />
                        <Route path="regist" element={<AdminUserRegist />} />
                        <Route path="delete" element={<AdminUserDelete />} />
                    </Route>
                    <Route path="inquires">
                        <Route index element={<AdminInquiries />} />
                        <Route path="inquiryId" element={<AdminInquiryDetail />} />
                        <Route path="regist" element={<AdminInquiryRegister />} />
                    </Route>
                    <Route path="categories">
                        <Route index element={<AdminCategories />} />
                        <Route path="categoryId" element={<AdminCategoryModify />} />
                        <Route path="regist" element={<AdminCategoryRegist />} />
                    </Route>
                    <Route path="notices" />
                    {/*<Route path="test" element={<TestDl/>}/>*/}

                    {/* 오류 */}
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
