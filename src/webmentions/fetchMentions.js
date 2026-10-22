import { WEBMENTION_TYPES } from './config';

const TYPE_BY_PROPERTY = { 'like-of': 'like', 'repost-of': 'repost', 'in-reply-to': 'reply', 'mention-of': 'mention' };

export const fetchMentions = async (postUrl) => {
    const response = await fetch(`https://webmention.io/api/mentions.jf2?target=${encodeURIComponent(postUrl)}&per-page=100`);
    if (!response.ok) throw new Error(`Webmentions unavailable (${response.status})`);
    const { children = [] } = await response.json();
    const grouped = Object.fromEntries(WEBMENTION_TYPES.map((type) => [type, []]));
    for (const item of children) {
        const type = TYPE_BY_PROPERTY[item['wm-property']] || 'mention';
        grouped[type].push({ author: item.author?.name || 'Someone', url: item.url, published: item.published, text: item.content?.text || '' });
    }
    return grouped;
};
