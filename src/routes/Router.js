import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";


const Router = () => {
    return (<>
        <Routes>
            <Route element={<Login />} path="/" exact />
            <Route element={<Login />} path="/myspace" exact />
        </Routes >
    </>
    )
}

export default Router;