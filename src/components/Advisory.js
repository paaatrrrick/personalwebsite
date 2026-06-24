import { Link } from 'react-router-dom';
import advisoryRoles from '../constants/advisory';
import './advisory.css';

const Advisory = () => {
    return (
        <main className="advisory">
            <header className="advisoryHeader">
                <Link to="/" className="advisoryBack">← Back home</Link>
                <h1>Advisory</h1>
                <p>Startups and teams I advise on docs, developer experience, and infrastructure.</p>
            </header>
            <ul className="advisoryList">
                {advisoryRoles.map((role) => (
                    <li key={role.company} className="advisoryItem">
                        <div className="advisoryMeta">
                            <span className="advisoryCompany">{role.company}</span>
                            <span className="advisoryDate">{role.period}</span>
                        </div>
                        <h2 className="advisoryFocus">{role.focus}</h2>
                        <p className="advisorySummary">{role.summary}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Advisory;
