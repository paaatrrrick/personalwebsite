import { Link } from 'react-router-dom';
import patents from '../constants/patents';
import './patents.css';

const Patents = () => {
    return (
        <main className="patents">
            <header className="patentsHeader">
                <Link to="/" className="patentsBack">← Back home</Link>
                <h1>Patents</h1>
                <p>Granted patents from my time working on distributed systems and data infrastructure.</p>
            </header>
            <ul className="patentsList">
                {patents.map((patent) => (
                    <li key={patent.number} className="patentItem">
                        <div className="patentMeta">
                            <span className="patentNumber">{patent.number}</span>
                            <span className="patentYear">{patent.year}</span>
                        </div>
                        <h2 className="patentTitle">{patent.title}</h2>
                        <p className="patentSummary">{patent.summary}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Patents;
