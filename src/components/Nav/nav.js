import { Link } from 'react-router-dom';
// import logo from '../../logo.svg';
import 'nav.css';

function Nav() {
    return (
        <nav>
            {/* <figure>
                <img>{logo}</img>
            </figure> */}
            <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
            </ul>
            <button>Contact Me</button>
        </nav>
    );
}

export default Nav;