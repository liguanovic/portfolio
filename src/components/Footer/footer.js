import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear} Kevin Tournier. All rights reserved.</p>
            <ul>
                <li><a href="mailto:k.tournier78@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a></li>
                <li><a href="https://github.com/liguanovic" aria-label="GitHub"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>

        </footer>
    );
}

export default Footer;