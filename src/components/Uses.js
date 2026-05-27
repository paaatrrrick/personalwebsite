import { Link } from 'react-router-dom';
import './uses.css';

const sections = [
    {
        heading: 'Editor & Terminal',
        items: [
            { name: 'VS Code', detail: 'Daily driver editor, with the Vim extension and a heavily tweaked One Dark Pro theme.' },
            { name: 'Ghostty', detail: 'Terminal of choice — fast, GPU-rendered, and stays out of the way.' },
            { name: 'Zsh + Starship', detail: 'Minimal prompt with git status and the current Node/Python version.' },
        ],
    },
    {
        heading: 'Hardware',
        items: [
            { name: '14" MacBook Pro (M3 Pro)', detail: '36 GB of RAM. Handles every Node project I throw at it without breaking a sweat.' },
            { name: 'LG 27" 4K display', detail: 'One external monitor in portrait orientation for docs and code review.' },
            { name: 'Keychron K3 Pro', detail: 'Low-profile mechanical keyboard with brown switches.' },
        ],
    },
    {
        heading: 'Apps I open every day',
        items: [
            { name: 'Linear', detail: 'Issue tracking. Lightning fast and opinionated in the right places.' },
            { name: 'Raycast', detail: 'Spotlight replacement, clipboard history, and a hundred small workflows.' },
            { name: 'Arc', detail: 'Primary browser. Spaces keep work and personal contexts separate.' },
        ],
    },
];

const Uses = () => {
    return (
        <main className="uses">
            <header className="usesHeader">
                <Link to="/" className="usesBack">← Back home</Link>
                <h1>What I use</h1>
                <p>A running list of the hardware, software, and tools I reach for most. Updated whenever I swap something out.</p>
            </header>
            {sections.map((section) => (
                <section key={section.heading} className="usesSection">
                    <h2>{section.heading}</h2>
                    <ul>
                        {section.items.map((item) => (
                            <li key={item.name}>
                                <strong>{item.name}</strong>
                                <span>{item.detail}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
};

export default Uses;
