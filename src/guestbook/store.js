import {
    GUESTBOOK_BLOCKED_WORDS,
    GUESTBOOK_LIMITS,
    GUESTBOOK_REQUIRE_APPROVAL,
    GUESTBOOK_STORAGE_KEY,
} from './config';

const POSTS_KEY = 'guestbook:posts-today';

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

const postsToday = () => {
    const today = new Date().toISOString().slice(0, 10);
    const stored = JSON.parse(window.localStorage.getItem(POSTS_KEY) || '{}');
    return stored.day === today ? stored : { day: today, count: 0 };
};

const containsBlockedWord = (text) =>
    GUESTBOOK_BLOCKED_WORDS.some((word) => text.toLowerCase().includes(word));

export const addEntry = (input) => {
    const posts = postsToday();
    if (posts.count >= GUESTBOOK_LIMITS.postsPerVisitorPerDay) {
        throw new GuestbookError('rate_limited', `You can sign ${GUESTBOOK_LIMITS.postsPerVisitorPerDay} times a day. Come back tomorrow.`);
    }
    const valid = validateEntry(input);
    const flagged = containsBlockedWord(`${valid.name} ${valid.message}`);
    const entry = {
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        ...valid,
        createdAt: new Date().toISOString(),
        status: flagged || GUESTBOOK_REQUIRE_APPROVAL ? 'pending' : 'published',
    };
    window.localStorage.setItem(POSTS_KEY, JSON.stringify({ ...posts, count: posts.count + 1 }));
    write([entry, ...read()]);
    return entry;
};

export const listPending = () => read().filter((entry) => entry.status === 'pending');

export const moderateEntry = (id, decision) => {
    if (!['published', 'hidden'].includes(decision)) {
        throw new GuestbookError('invalid_decision', 'Decision must be published or hidden.');
    }
    write(read().map((entry) => (entry.id === id ? { ...entry, status: decision } : entry)));
};
