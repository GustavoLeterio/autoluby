import { Main } from './Dashboard.style'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { login } from '../../features/user';
import axios from "../../services/api";

function Login() {
    const selector = useSelector((state) => state.user.value);


    if (selector.token) return (
        <Main>
            Autorizado
        </Main >
    );

    else return (
        <Main>
            Não Autorizado
        </Main >
    );
}

export default Login;
