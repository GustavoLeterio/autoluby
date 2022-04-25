import logOut from './assets/log-out.svg';
import search from './assets/search.svg';
import Logo from '../Logo'
import { StyledHeader, SearchBox, Input, Icon, Button } from './Header.style'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user';

function Header({ mod }) {
    const dispatch = useDispatch();

    if (mod !== "/login") return (
        <StyledHeader>
            <Logo props="header" />
            <SearchBox display={mod !== "/dashboard" ? "none" : "flex"}>
                <Input type="text" />
                <Icon src={search} alt="Search icon" />
            </SearchBox>
            <Link className="link" to="/login"><Button onClick={() => dispatch(login({ token: "" }))}>Sair <Icon src={logOut} alt="Log-Out" /></Button></Link>
        </StyledHeader>
    );
}

export default Header;
