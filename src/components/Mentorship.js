import { Link } from 'react-router-dom';
import mentorship from '../constants/mentorship';
import './mentorship.css';

const Mentorship = () => {
    return (
        <main className="mentorship">
            <header className="mentorshipHeader">
                <Link to="/" className="mentorshipBack">← Back home</Link>
                <h1>Mentorship</h1>
                <p>Programs where I mentor engineers and open-source documentation contributors.</p>
            </header>
            <ul className="mentorshipList">
                {mentorship.map((item) => (
                    <li key={item.program} className="mentorshipItem">
                        <div className="mentorshipMeta">
                            <span className="mentorshipProgram">{item.program}</span>
                            <span className="mentorshipDate">{item.period}</span>
                        </div>
                        <h2 className="mentorshipRole">{item.role}</h2>
                        <p className="mentorshipSummary">{item.summary}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Mentorship;
