import logOut from './assets/log-out.svg';
import search from './assets/search.svg';
import Logo from '../Logo'
import { StyledHeader, SearchBox, Input, Icon, Button } from './Header.style'
import { Link } from 'react-router-dom';

function Header({ mod }) {
    if (mod !== "/") return (
        <StyledHeader>
            <Logo props="header" />
            <SearchBox display={mod !== "/myspace" ? "none" : "flex"}>
                <Input type="text" />
                <Icon src={search} alt="Search icon" />
            </SearchBox>
            <Link className="link" to="/"><Button>Sair <Icon src={logOut} alt="Log-Out" /></Button></Link>
        </StyledHeader>
    );
}

export default Header;
