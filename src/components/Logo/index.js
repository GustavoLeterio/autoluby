import icon from './assets/logo.svg';
import { StyledLogo } from './Logo.style';

function Logo({ props }) {
    return (
        <StyledLogo className="Logo" margin={props === "login" ? "7.5vh 0 0 7.75vw" : 0}>
            <img src={icon} alt="AutoLuby Logo" />
            <p>AutoLuby</p>
        </StyledLogo>
    );
}

export default Logo;
