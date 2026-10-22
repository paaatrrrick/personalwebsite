import { listEntries } from '../guestbook/store';

export const buildGuestbookFeed = (siteUrl) => {
    const { entries } = listEntries({ page: 1 });
    const items = entries
        .map(
            (entry) => `<item><title>${entry.name}</title><description>${entry.message}</description><pubDate>${new Date(entry.createdAt).toUTCString()}</pubDate><guid>${siteUrl}/guestbook#${entry.id}</guid></item>`
        )
        .join('');
    return `<?xml version="1.0"?><rss version="2.0"><channel><title>Guestbook</title><link>${siteUrl}/guestbook</link>${items}</channel></rss>`;
};
