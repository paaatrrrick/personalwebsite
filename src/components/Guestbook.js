import { useState } from 'react';

import { GUESTBOOK_ENABLED, GUESTBOOK_LIMITS, GUESTBOOK_REACTIONS } from '../guestbook/config';
import { reactToEntry } from '../guestbook/store';
import { useGuestbook } from '../hooks/useGuestbook';
import NotFound from './NotFound';
import './guestbook.css';

const SORT_OPTIONS = [
    { id: 'newest', label: 'Newest' },
    { id: 'reactions', label: 'Most reactions' },
];

const reactionCount = (entry) => Object.values(entry.reactions || {}).reduce((sum, count) => sum + count, 0);

const Guestbook = () => {
    const { entries, total, page, pages, goToPage, sign, error } = useGuestbook();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [sort, setSort] = useState('newest');
    const [query, setQuery] = useState('');

    if (!GUESTBOOK_ENABLED) return <NotFound />;

    const onSubmit = (event) => {
        event.preventDefault();
        if (sign({ name, message })) setMessage('');
    };

    const needle = query.trim().toLowerCase();
    const matchingEntries = needle
        ? entries.filter((entry) => `${entry.name} ${entry.message}`.toLowerCase().includes(needle))
        : entries;
    const sortedEntries = sort === 'reactions'
        ? [...matchingEntries].sort((a, b) => reactionCount(b) - reactionCount(a))
        : matchingEntries;

    return (
        <main className="guestbook">
            <h1>Guestbook</h1>
            <p className="guestbook-intro">Say hi. Entries show up right away, newest first. <a href="/guestbook/feed.xml">RSS</a></p>
            <form className="guestbook-form" onSubmit={onSubmit}>
                <label>
                    Name
                    <input value={name} maxLength={GUESTBOOK_LIMITS.nameMaxLength} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Message
                    <textarea value={message} maxLength={GUESTBOOK_LIMITS.messageMaxLength} onChange={(e) => setMessage(e.target.value)} />
                    <span className="guestbook-count">{message.length}/{GUESTBOOK_LIMITS.messageMaxLength}</span>
                </label>
                {error && <p className="guestbook-error" role="alert">{error}</p>}
                <button type="submit">Sign the guestbook</button>
            </form>
            <div className="guestbook-toolbar">
                <p className="guestbook-total">{needle ? `${matchingEntries.length} of ` : ''}{total} {total === 1 ? 'entry' : 'entries'}</p>
                <input
                    className="guestbook-search"
                    type="search"
                    aria-label="Search entries"
                    placeholder="Search entries"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <div className="guestbook-sort" role="group" aria-label="Sort entries">
                    {SORT_OPTIONS.map((option) => (
                        <button key={option.id} aria-pressed={sort === option.id} onClick={() => setSort(option.id)}>
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
            <ol className="guestbook-entries">
                {sortedEntries.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.name}</strong>
                        <time dateTime={entry.createdAt}>{new Date(entry.createdAt).toLocaleDateString()}</time>
                        <p>{entry.message}</p>
                        <div className="guestbook-reactions">
                            {GUESTBOOK_REACTIONS.map((emoji) => (
                                <button key={emoji} onClick={() => { reactToEntry(entry.id, emoji); goToPage(page); }}>
                                    {emoji} {(entry.reactions || {})[emoji] || ''}
                                </button>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
            {pages > 1 && (
                <nav className="guestbook-pages">
                    <button disabled={page === 1} onClick={() => goToPage(page - 1)}>Newer</button>
                    <span>Page {page} of {pages}</span>
                    <button disabled={page === pages} onClick={() => goToPage(page + 1)}>Older</button>
                </nav>
            )}
        </main>
    );
};

export default Guestbook;
