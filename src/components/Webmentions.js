import { useEffect, useState } from 'react';

import { WEBMENTIONS_ENABLED } from '../webmentions/config';
import { fetchMentions } from '../webmentions/fetchMentions';

const Webmentions = ({ postUrl }) => {
    const [mentions, setMentions] = useState(null);
    useEffect(() => {
        if (WEBMENTIONS_ENABLED) fetchMentions(postUrl).then(setMentions).catch(() => setMentions(null));
    }, [postUrl]);
    if (!WEBMENTIONS_ENABLED || !mentions) return null;
    return (
        <section className="webmentions">
            <p>{mentions.like.length} likes · {mentions.repost.length} reposts</p>
            <ol>
                {mentions.reply.map((reply) => (
                    <li key={reply.url}><a href={reply.url}>{reply.author}</a>: {reply.text}</li>
                ))}
            </ol>
        </section>
    );
};

export default Webmentions;
