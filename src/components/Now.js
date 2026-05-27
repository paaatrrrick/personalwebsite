import { Link } from 'react-router-dom';
import './now.css';

const updatedAt = 'May 2026';

const sections = [
    {
        heading: 'Working on',
        items: [
            'Shipping AI-assisted editing features at Mintlify.',
            'Writing a short essay series on what one year of agent-driven dev tooling actually changed.',
        ],
    },
    {
        heading: 'Learning',
        items: [
            'Reading Designing Data-Intensive Applications, again, this time slower.',
            'Picking up enough Rust to be useful in a code review.',
        ],
    },
    {
        heading: 'Outside of work',
        items: [
            'Training for a half marathon in the fall.',
            'Slowly fixing up a 1973 Vespa.',
        ],
    },
];

const Now = () => {
    return (
        <main className="now">
            <header className="nowHeader">
                <Link to="/" className="nowBack">← Back home</Link>
                <h1>What I'm doing now</h1>
                <p className="nowMeta">Last updated {updatedAt}.</p>
                <p className="nowIntro">
                    Inspired by Derek Sivers' <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">/now page</a> movement —
                    a snapshot of what I'd tell a friend if they asked me what I was up to right now.
                </p>
            </header>
            {sections.map((section) => (
                <section key={section.heading} className="nowSection">
                    <h2>{section.heading}</h2>
                    <ul>
                        {section.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
};

export default Now;
