export const GUESTBOOK_ENABLED = process.env.REACT_APP_GUESTBOOK === 'on';

export const GUESTBOOK_LIMITS = {
    nameMaxLength: 40,
    messageMaxLength: 280,
    entriesPerPage: 20,
    postsPerVisitorPerDay: 3,
};

export const GUESTBOOK_STORAGE_KEY = 'guestbook:entries:v1';
