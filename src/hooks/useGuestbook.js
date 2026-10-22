import { useCallback, useState } from 'react';

import { addEntry, listEntries } from '../guestbook/store';

export const useGuestbook = () => {
    const [page, setPage] = useState(1);
    const [result, setResult] = useState(() => listEntries({ page: 1 }));
    const [error, setError] = useState('');

    const goToPage = useCallback((next) => {
        setPage(next);
        setResult(listEntries({ page: next }));
    }, []);

    const sign = useCallback((input) => {
        setError('');
        try {
            addEntry(input);
            setResult(listEntries({ page }));
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    }, [page]);

    return { ...result, page, goToPage, sign, error };
};
