import { Link } from 'react-router-dom';
import './colophon.css';

const updatedAt = 'June 2026';

const sections = [
    {
        heading: 'Built with',
        items: [
            'React, bootstrapped with Create React App.',
            'react-router-dom for client-side routing.',
            'Plain CSS, one stylesheet per page — no framework, no preprocessor.',
        ],
    },
    {
        heading: 'Hosted on',
        items: [
            'Netlify, deployed straight from the master branch on GitHub.',
            'A custom domain registered through GoDaddy.',
        ],
    },
    {
        heading: 'Principles',
        items: [
            'No analytics, no cookies, no tracking. Just pages.',
            'Every page should load fast and read well on a phone.',
            'Content lives in plain JS constants so it is easy to edit.',
        ],
    },
];

const Colophon = () => {
    return (
        <main className="colophon">
            <header className="colophonHeader">
                <Link to="/" className="colophonBack">← Back home</Link>
                <h1>Colophon</h1>
                <p className="colophonMeta">Last updated {updatedAt}.</p>
                <p className="colophonIntro">
                    A short note on how this site is put together — the tools, the
                    hosting, and the handful of rules I try to keep it honest to.
                </p>
            </header>
            {sections.map((section) => (
                <section key={section.heading} className="colophonSection">
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

export default Colophon;
