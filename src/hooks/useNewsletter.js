import { useState } from 'react';

import { subscribeToNewsletter } from '../utils/newsletter';

export const useNewsletter = () => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const subscribe = async (email) => {
        setStatus('loading');
        setError('');
        try {
            await subscribeToNewsletter(email);
            setStatus('success');
        } catch (err) {
            setError(err.message);
            setStatus('error');
        }
    };

    const reset = () => {
        setStatus('idle');
        setError('');
    };

    return { status, error, subscribe, reset };
};
