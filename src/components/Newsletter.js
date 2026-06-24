import './newsletter.css';

import { useState } from 'react';

import { useNewsletter } from '../hooks/useNewsletter';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const { status, error, subscribe, reset } = useNewsletter();

    const onSubmit = (e) => {
        e.preventDefault();
        subscribe(email);
    };

    if (status === 'success') {
        return (
            <section className="newsletter">
                <p className="newsletterSuccess">Thanks for subscribing! Check your inbox to confirm.</p>
                <button
                    className="newsletterReset"
                    onClick={() => {
                        setEmail('');
                        reset();
                    }}
                >
                    Subscribe another email
                </button>
            </section>
        );
    }

    return (
        <section className="newsletter">
            <h2>Subscribe to the newsletter</h2>
            <p>Occasional notes on what I'm building. No spam.</p>
            <form className="newsletterForm" onSubmit={onSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@somewhere.com"
                    aria-label="Email address"
                />
                <button type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                </button>
            </form>
            {status === 'error' && <p className="newsletterError">{error}</p>}
        </section>
    );
};

export default Newsletter;
