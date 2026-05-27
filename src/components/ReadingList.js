import { useState } from 'react';
import { Link } from 'react-router-dom';
import reading from '../constants/reading';
import './readingList.css';

const STATUSES = ['All', 'In progress', 'Finished', 'Re-reading'];

const ReadingList = () => {
    const [status, setStatus] = useState('All');

    const visible = reading.filter((item) =>
        status === 'All' ? true : item.status === status
    );

    return (
        <main className="readingList">
            <header className="readingListHeader">
                <Link to="/" className="readingListBack">← Back home</Link>
                <h1>Reading list</h1>
                <p>Books I'm reading, just finished, or keep coming back to.</p>
                <div className="readingListFilters">
                    {STATUSES.map((option) => (
                        <button
                            key={option}
                            className={
                                status === option
                                    ? 'readingListFilter active'
                                    : 'readingListFilter'
                            }
                            onClick={() => setStatus(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </header>
            <ul className="readingListItems">
                {visible.map((book) => (
                    <li key={book.title} className="readingListItem">
                        <div className="readingListItemTop">
                            <h2>{book.title}</h2>
                            <span className={`readingListStatus ${book.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                {book.status}
                            </span>
                        </div>
                        <p className="readingListAuthor">{book.author}</p>
                        <p className="readingListNote">{book.note}</p>
                    </li>
                ))}
                {!visible.length && (
                    <li className="readingListEmpty">Nothing in this bucket right now.</li>
                )}
            </ul>
        </main>
    );
};

export default ReadingList;
