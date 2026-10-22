export const NOW_PLAYING_ENABLED = process.env.REACT_APP_NOW_PLAYING === 'on';
export const NOW_PLAYING_REFRESH_MS = 30_000;

export const fetchNowPlaying = async () => {
    const response = await fetch('/api/now-playing');
    if (response.status === 204) return null;
    if (!response.ok) throw new Error(`Now playing unavailable (${response.status})`);
    const { title, artist, albumArt, url } = await response.json();
    return { title, artist, albumArt, url };
};
