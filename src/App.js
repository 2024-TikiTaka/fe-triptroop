import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/common.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/router/ProtectedRoute";

import Layout from "./layouts/Layout";
import Error from "./pages/error/Error";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import SchedulesList from "./pages/schedule/SchedulesList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/signup" element={<ProtectedRoute loginCheck={false}> <Signup /> </ProtectedRoute>} />
                    <Route path="/login" element={<ProtectedRoute loginCheck={false}> <Login /></ProtectedRoute>} />
                    <Route path="/travels" />
                    <Route path="/schedules" element={<ProtectedRoute loginCheck={false}> <SchedulesList /></ProtectedRoute>}/>
                    <Route path="/companions" />
                    <Route path="/inquiries" />
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
