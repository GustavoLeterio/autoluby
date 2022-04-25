import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";



const Router = () => {
    return (
        <Routes>
            <Route element={<Login />} path="/login" exact />
            <Route element={<Dashboard />} path="/dashboard" exact />
        </Routes >
    )
}

export default Router;