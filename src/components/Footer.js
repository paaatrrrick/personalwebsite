import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="siteFooter">
            <div className="siteFooterInner">
                <div className="siteFooterCol">
                    <h4>Patrick Foster</h4>
                    <p>Software engineer in San Francisco. Building developer tools at Mintlify.</p>
                </div>
                <div className="siteFooterCol">
                    <h4>Site</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/timeline">Timeline</Link></li>
                        <li><Link to="/uses">Uses</Link></li>
                        <li><Link to="/now">Now</Link></li>
                        <li><Link to="/reading-list">Reading list</Link></li>
                    </ul>
                </div>
                <div className="siteFooterCol">
                    <h4>Elsewhere</h4>
                    <ul>
                        <li><a href="https://github.com/paaatrrrick" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/patrickrfoster" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="mailto:patrick.123.foster@gmail.com">Email</a></li>
                    </ul>
                </div>
            </div>
            <div className="siteFooterCopy">© {year} Patrick Foster. Built with React.</div>
        </footer>
    );
};

export default Footer;
