import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Teste from "../components/Teste";
// import { isAuthenticated } from "../auth/auth";


const Router = () => {
    return (<>
        <Routes>
            <Route element={<Login />} path="/" exact />
            <PrivateRoute element={<Teste />} path="/myspace" exact />
        </Routes >
    </>
    )
}

export default Router;