import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear} Kevin Tournier. All rights reserved.</p>
            <ul>
                <li>
                    <a href="mailto:k.tournier78@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/liguanovic" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kevin-tournier-0266b12a0/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </footer>

    );
}

export default Footer;