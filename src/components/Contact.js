import { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus('error');
            return;
        }
        const subject = encodeURIComponent(`Hello from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:patrick@example.com?subject=${subject}&body=${body}`;
        setStatus('sent');
    };

    return (
        <section className="contact">
            <div className="contactHeader">
                <h2>Get in touch</h2>
                <hr />
            </div>
            <form className="contactForm" onSubmit={onSubmit}>
                <label className="contactField">
                    <span>Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                    />
                </label>
                <label className="contactField">
                    <span>Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@somewhere.com"
                    />
                </label>
                <label className="contactField">
                    <span>Message</span>
                    <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="What's on your mind?"
                    />
                </label>
                <button type="submit" className="contactSubmit">
                    Send
                </button>
                {status === 'error' && (
                    <p className="contactStatus error">Please fill in all three fields.</p>
                )}
                {status === 'sent' && (
                    <p className="contactStatus success">Opening your mail app…</p>
                )}
            </form>
        </section>
    );
};

export default Contact;
