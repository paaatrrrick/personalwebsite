import { Link } from 'react-router-dom';
import bookmarks from '../constants/bookmarks';
import './bookmarks.css';

const Bookmarks = () => {
    return (
        <main className="bookmarks">
            <header className="bookmarksHeader">
                <Link to="/" className="bookmarksBack">← Back home</Link>
                <h1>Bookmarks</h1>
                <p>Links worth keeping — articles, tools, and references I come back to.</p>
            </header>
            {bookmarks.map((item) => (
                <article className="bookmarkItem" key={item.url}>
                    <span className="bookmarkTag">{item.tag}</span>
                    <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                    <p>{item.note}</p>
                </article>
            ))}
        </main>
    );
};

export default Bookmarks;
