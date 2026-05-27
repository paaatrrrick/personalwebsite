import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
    return (
        <main className="notFound">
            <div className="notFoundInner">
                <h1>404</h1>
                <p>That page doesn't exist — or it used to and doesn't anymore.</p>
                <div className="notFoundActions">
                    <Link to="/" className="notFoundBtn primary">Go home</Link>
                    <Link to="/blog" className="notFoundBtn">Read the blog</Link>
                    <Link to="/timeline" className="notFoundBtn">See the timeline</Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
