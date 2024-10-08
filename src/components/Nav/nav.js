
// import logo from '../../logo.svg';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            {/* <figure>
                <img>{logo}</img>
            </figure> */}
            <ul>
                <li> <a href="/">Home</a></li>
                <li> <a href="#skills">About</a></li>
                <li> <a href="/portfolio">Portfolio</a></li>
            </ul>
            <button className="buttonDesktop"><span><i className="fa-solid fa-envelope"></i></span>Contact Me</button>
            <button className="buttonMobile"><i className="fa-solid fa-envelope"></i></button>
        </nav>
    );
}

export default Nav;