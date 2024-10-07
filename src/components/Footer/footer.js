import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear} Kevin Tournier. All rights reserved.</p>
            <ul>
                <li><a href="mailto:k.tournier78@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                <li><a href="https://github.com/liguanovic"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </footer>
    );
}

export default Footer;