import { Main, ContentWrapper, Menu, MenuItem } from './Dashboard.style'
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import soldCarsImage from "./assets/soldCarsImage.png";
import listCarsImage from "./assets/listCarsImage.png";
import listEmployeesImage from "./assets/listEmployeesImage.png";
import { login } from '../../features/user';
import axios from "../../services/api";
import { useEffect } from 'react';

function Login() {

    const navigate = useNavigate();
    const userSelector = useSelector((state) => state.user.value);

    useEffect(() => {
        if (!userSelector.token) navigate("/login");
    });
    if (!userSelector.token) return;

    axios.post("/login")
        .then(function (response) {
            const token = response.data.token;
            navigate("/dashboard");
        })
        .catch(function (error) {

        });

    return (
        <Main>
            <ContentWrapper>
                <h1>Bem Vindo, Gustavo</h1>
                <h3>Menu</h3>
                <Menu>
                    <MenuItem>
                        <Link to="/">
                            <div>
                                <h2>Veículos reservados e vendidos</h2>
                                <h3>Veículos reservados e vendidos por você</h3>
                            </div>
                            <p>147 Veículos</p>
                            <img src={soldCarsImage} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">
                            <div>
                                <h2>Listagem geral de veículos</h2>
                                <h3>Listagem de veículos de toda a empresa</h3>
                            </div>
                            <p>147 Veículos</p>
                            <img src={listCarsImage} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">
                            <div>
                                <h2>Funcionários da empresa</h2>
                                <h3>Listagem de todos os funcionários da empresa</h3>
                            </div>
                            <p>147 Veículos</p>
                            <img src={listEmployeesImage} />
                        </Link>
                    </MenuItem>
                </Menu>
            </ContentWrapper>
        </Main >
    );
}

export default Login;
