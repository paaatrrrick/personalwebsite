import { BOOKCLUB_ENABLED, currentPick } from '../bookclub/picks';
import NotFound from './NotFound';

const BookClub = () => {
    if (!BOOKCLUB_ENABLED) return <NotFound />;
    const pick = currentPick();
    return (
        <main className="bookclub">
            <h1>Book club</h1>
            {pick ? (
                <p>This month we're reading <strong>{pick.title}</strong>. We meet on {pick.meetingDate}. <a href={pick.joinUrl}>Join the call</a>.</p>
            ) : (
                <p>No pick this month yet.</p>
            )}
        </main>
    );
};

export default BookClub;
