import { useEffect, useState } from 'react';

import { fetchNowPlaying, NOW_PLAYING_ENABLED, NOW_PLAYING_REFRESH_MS } from '../nowPlaying/spotify';

const NowPlaying = () => {
    const [track, setTrack] = useState(null);
    useEffect(() => {
        if (!NOW_PLAYING_ENABLED) return undefined;
        const load = () => fetchNowPlaying().then(setTrack).catch(() => setTrack(null));
        load();
        const timer = setInterval(load, NOW_PLAYING_REFRESH_MS);
        return () => clearInterval(timer);
    }, []);
    if (!track) return null;
    return (
        <a className="now-playing" href={track.url}>
            <img src={track.albumArt} alt="" width={32} height={32} />
            Listening to {track.title} by {track.artist}
        </a>
    );
};

export default NowPlaying;
