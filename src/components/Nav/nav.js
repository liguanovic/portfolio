import { Link } from 'react-scroll';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        className="scrollLink"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        className="scrollLink"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        className="scrollLink"
                    >
                        Portfolio
                    </Link>
                </li>
            </ul>
            <a href="#form" className="buttonDesktop" aria-label="Contact Me">
                <span><i className="fa-solid fa-envelope"></i></span>Contact Me
            </a>
            <a href="#form" className="buttonMobile" aria-label="Contact Me">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </nav>
    );
}

export default Nav;
