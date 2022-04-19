import carImage from './assets/car-image.webp';
import Logo from '../Logo'
import { Main, ContentWrapper, Content, TextWrapper, Fieldset, Settings, Signup, BgImage } from './Login.style'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Main>
            <ContentWrapper>
                <Logo props="login" />
                <Content>
                    <form method="POST">
                        <TextWrapper>
                            <h1>Bem-vindo à AutoLuby</h1>
                            <p>Faça o login para acessar sua conta.</p>
                        </TextWrapper>
                        <Fieldset>
                            <label>Endereço de email <input type="text" placeholder="@mail.com" /></label><br />
                            <label>Senha<input type="password" placeholder="senha" /></label>
                            <Settings>
                                <label ><input type="checkbox" />Lembrar minha senha</label>
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
