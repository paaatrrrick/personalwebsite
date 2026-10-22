import { useState } from 'react';

import { GUESTBOOK_ENABLED } from '../guestbook/config';
import { listPending, moderateEntry } from '../guestbook/store';
import NotFound from './NotFound';

const GuestbookModeration = () => {
    const [pending, setPending] = useState(listPending);
    if (!GUESTBOOK_ENABLED) return <NotFound />;

    const decide = (id, decision) => {
        moderateEntry(id, decision);
        setPending(listPending());
    };

    return (
        <main className="guestbook">
            <h1>Guestbook moderation</h1>
            {pending.length === 0 && <p>Nothing waiting for review.</p>}
            <ol className="guestbook-entries">
                {pending.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.name}</strong>
                        <p>{entry.message}</p>
                        <button onClick={() => decide(entry.id, 'published')}>Publish</button>
                        <button onClick={() => decide(entry.id, 'hidden')}>Hide</button>
                    </li>
                ))}
            </ol>
        </main>
    );
};

export default GuestbookModeration;
