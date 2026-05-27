import { Link } from 'react-router-dom';
import talks from '../constants/talks';
import './talks.css';

const Talks = () => {
    return (
        <main className="talks">
            <header className="talksHeader">
                <Link to="/" className="talksBack">← Back home</Link>
                <h1>Talks</h1>
                <p>Talks I've given at meetups and conferences. Slides and recordings linked where available.</p>
            </header>
            <ul className="talksList">
                {talks.map((talk) => (
                    <li key={talk.title} className="talkItem">
                        <div className="talkMeta">
                            <span className="talkVenue">{talk.venue}</span>
                            <span className="talkDate">{talk.date}</span>
                        </div>
                        <h2 className="talkTitle">
                            {talk.link
                                ? <a href={talk.link} target="_blank" rel="noreferrer">{talk.title}</a>
                                : talk.title}
                        </h2>
                        <p className="talkSummary">{talk.summary}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Talks;
