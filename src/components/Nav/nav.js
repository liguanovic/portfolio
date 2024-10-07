import { Link } from 'react-router-dom';
// import logo from '../../logo.svg';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            {/* <figure>
                <img>{logo}</img>
            </figure> */}
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/portfolio">Portfolio</Link>
            </ul>
            <button><span><i className="fa-solid fa-envelope"></i></span>Contact Me</button>
        </nav>
    );
}

export default Nav;