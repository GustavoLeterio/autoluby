import { useState, useEffect } from 'react';
import carImage from './assets/car-image.webp';
import authRejectIcon from './assets/authRejectIcon.svg'
import authAcceptIcon from './assets/authAcceptIcon.svg'
import { Main, ContentWrapper, Content, TextWrapper, Fieldset, InputField, Settings, Signup, BgImage } from './Login.style'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/user';
import Logo from '../../components/Logo'
import axios from "../../services/api";

function Login() {
    const [emailAuth, setEmailAuth] = useState("default");
    const [passwordAuth, setPasswordAuth] = useState("default");

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user.value);

    useEffect(() => {
        if (userSelector.token) {
            navigate("/dashboard");
        }
    });

    if (userSelector.token) return;

    function handleOnSubmit(e) {
        e.preventDefault();

        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        axios.post("/login", {
            email: formData.email,
            password: formData.password
        })
            .then(function (response) {
                const token = response.data.token;
                dispatch(login({ token: token }));
                navigate("/dashboard");
            })
            .catch(function (error) {
                if (formData.email === "" || formData.email.indexOf('@') === -1 || formData.email.indexOf('.') === -1) setEmailAuth("unauthorized");
                else setEmailAuth("authorized");
                setPasswordAuth("unauthorized");
                setTimeout(() => {
                    setEmailAuth("default");
                    setPasswordAuth("default");
                }, 3000);
            });
    }

    function inputVerifier(state) {
        if (state === "default") return {
            styles: {
                iconOpacity: 0,
                fontOpacity: 0,
                border: "1px solid var(--input-border)",
                inputColor: "var(--gray)",
                messageColor: "#00000000"
            }
        };
        if (state === "authorized") return {
            styles: {
                iconOpacity: 1,
                fontOpacity: 0,
                border: "2px solid var(--confirmation)",
                inputColor: "var(--gray)",
                messageColor: "#00000000"
            },
            icon: authAcceptIcon,
        };
        if (state === "unauthorized") return {
            styles:
            {
                iconOpacity: 1,
                fontOpacity: 1,
                border: "2px solid var(--error)",
                inputColor: "#00000000",
                messageColor: "var(--error)"
            },
            icon: authRejectIcon,
            message: "inválid"
        };
    }

    return (
        <Main>
            <ContentWrapper>
                <Logo props="login" />
                <Content>
                    <form onSubmit={handleOnSubmit}>
                        <TextWrapper>
                            <h1>Bem-vindo à AutoLuby</h1>
                            <p>Faça o login para acessar sua conta.</p>
                        </TextWrapper>
                        <Fieldset>
                            <label>Endereço de email
                                <InputField auth={inputVerifier(emailAuth).styles}>
                                    <input type="text" name="email" placeholder="@mail.com" required />
                                    <span>email {inputVerifier(emailAuth).message}o</span>
                                    <img src={inputVerifier(emailAuth).icon} alt="Authorization icon" />
                                </InputField>
                            </label>
                            <label>
                                Senha
                                <InputField auth={inputVerifier(passwordAuth).styles}>
                                    <input type="password" name="password" placeholder="senha" required />
                                    <span>senha {inputVerifier(passwordAuth).message}a</span>
                                    <img src={inputVerifier(passwordAuth).icon} alt="Authorization icon" />
                                </InputField>
                            </label>
                            <Settings>
                                <label ><input type="checkbox" name="remember" />Lembrar minha senha</label>
                                <Link className="link" to="/">Esqueceu a senha?</Link>
                            </Settings>
                            <input type="submit" value="Entrar" />
                        </Fieldset>
                        <Signup>
                            Ainda não possui uma conta?
                            <Link className="link" to="/"> Criar Conta</Link>
                        </Signup>
                    </form>
                </Content>
            </ContentWrapper>
            <BgImage src={carImage} alt="Beautiful Subaru Car" />
        </Main >
    );
}

export default Login;
