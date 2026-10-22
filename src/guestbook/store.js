import { GUESTBOOK_LIMITS, GUESTBOOK_STORAGE_KEY } from './config';

const read = () => {
    try {
        return JSON.parse(window.localStorage.getItem(GUESTBOOK_STORAGE_KEY)) || [];
    } catch {
        return [];
    }
};

const write = (entries) => window.localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(entries));

export class GuestbookError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}

export const validateEntry = ({ name, message }) => {
    const trimmedName = (name || '').trim();
    const trimmedMessage = (message || '').trim();
    if (!trimmedName) throw new GuestbookError('name_required', 'Add your name.');
    if (trimmedName.length > GUESTBOOK_LIMITS.nameMaxLength) {
        throw new GuestbookError('name_too_long', `Names are limited to ${GUESTBOOK_LIMITS.nameMaxLength} characters.`);
    }
    if (!trimmedMessage) throw new GuestbookError('message_required', 'Write a message.');
    if (trimmedMessage.length > GUESTBOOK_LIMITS.messageMaxLength) {
        throw new GuestbookError('message_too_long', `Messages are limited to ${GUESTBOOK_LIMITS.messageMaxLength} characters.`);
    }
    return { name: trimmedName, message: trimmedMessage };
};

export const listEntries = ({ page = 1 } = {}) => {
    const visible = read().filter((entry) => entry.status === 'published');
    const start = (page - 1) * GUESTBOOK_LIMITS.entriesPerPage;
    return {
        entries: visible.slice(start, start + GUESTBOOK_LIMITS.entriesPerPage),
        total: visible.length,
        pages: Math.max(1, Math.ceil(visible.length / GUESTBOOK_LIMITS.entriesPerPage)),
    };
};

export const addEntry = (input) => {
    const entry = {
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        ...validateEntry(input),
        createdAt: new Date().toISOString(),
        status: 'published',
    };
    write([entry, ...read()]);
    return entry;
};
