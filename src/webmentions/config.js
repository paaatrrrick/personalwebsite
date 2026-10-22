export const WEBMENTIONS_ENABLED = process.env.REACT_APP_WEBMENTIONS === 'on';
export const WEBMENTION_ENDPOINT = process.env.REACT_APP_WEBMENTION_ENDPOINT || 'https://webmention.io/patrickfoster.dev/webmention';
export const WEBMENTION_TYPES = ['like', 'repost', 'reply', 'mention'];
