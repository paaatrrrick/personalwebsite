import { useState } from 'react';

import { GUESTBOOK_ENABLED, GUESTBOOK_LIMITS } from '../guestbook/config';
import { useGuestbook } from '../hooks/useGuestbook';
import NotFound from './NotFound';
import './guestbook.css';

const Guestbook = () => {
    const { entries, total, page, pages, goToPage, sign, error } = useGuestbook();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    if (!GUESTBOOK_ENABLED) return <NotFound />;

    const onSubmit = (event) => {
        event.preventDefault();
        if (sign({ name, message })) setMessage('');
    };

    return (
        <main className="guestbook">
            <h1>Guestbook</h1>
            <p className="guestbook-intro">Say hi. Entries show up right away, newest first.</p>
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
            <p className="guestbook-total">{total} {total === 1 ? 'entry' : 'entries'}</p>
            <ol className="guestbook-entries">
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.name}</strong>
                        <time dateTime={entry.createdAt}>{new Date(entry.createdAt).toLocaleDateString()}</time>
                        <p>{entry.message}</p>
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
