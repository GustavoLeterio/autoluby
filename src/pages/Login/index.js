import carImage from './assets/car-image.webp';
import Logo from '../../components/Logo'
import { Main, ContentWrapper, Content, TextWrapper, Fieldset, Settings, Signup, BgImage } from './Login.style'
import { Link } from 'react-router-dom'
import axios from "../../services/api";

function Login() {

    async function handleOnSubmit(e) {
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
                // const data = response.data;
            })
            .catch(function (error) {
                console.error(error);
            });


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
                            <label>Endereço de email <input type="email" name="email" placeholder="@mail.com" required /></label><br />
                            <label>Senha<input type="password" name="password" placeholder="senha" required /></label>
                            <Settings>
                                <label ><input type="checkbox" name="remember" />Lembrar minha senha</label>
                                <Link className="link" to="/">Esqueceu a senha?</Link>
                            </Settings>
                            <input type="submit" value="Entrar" />
                        </Fieldset>
                        <Signup>
                            Ainda não tem uma conta?
                            <Link className="link" to="/"> Criar Conta</Link>
                        </Signup>
                    </form>
                </Content>
            </ContentWrapper>
            <BgImage src={carImage} alt="Beautiful Subaru Car" />
        </Main>
    );
}

export default Login;
