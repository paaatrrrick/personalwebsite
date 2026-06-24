const NEWSLETTER_ENDPOINT = '/api/newsletter/subscribe';

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const subscribeToNewsletter = async (email) => {
    if (!isValidEmail(email)) {
        throw new Error('Please enter a valid email address.');
    }
    const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
    });
    if (!res.ok) {
        throw new Error('Subscription failed. Please try again later.');
    }
    return res.json();
};
