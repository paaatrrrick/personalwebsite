export const TALK_VIDEOS_ENABLED = process.env.REACT_APP_TALK_VIDEOS === 'on';

export const VIDEO_PROVIDERS = {
    youtube: (id) => `https://www.youtube-nocookie.com/embed/${id}`,
    vimeo: (id) => `https://player.vimeo.com/video/${id}?dnt=1`,
};

export const embedUrl = ({ provider, id, start = 0 }) => {
    const build = VIDEO_PROVIDERS[provider];
    if (!build) throw new Error(`Unsupported video provider "${provider}". Use youtube or vimeo.`);
    const url = build(id);
    return start > 0 ? `${url}${url.includes('?') ? '&' : '?'}start=${start}` : url;
};
