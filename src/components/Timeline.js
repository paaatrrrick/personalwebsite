import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import workExperience from '../constants/work';
import './timeline.css';

// Pull every 4-digit year out of a timeLine string so entries can be sorted
// and labelled without changing the shape of the work.js data.
const parseYears = (timeLine = '') => {
    const years = (timeLine.match(/\d{4}/g) || []).map(Number);
    const isPresent = /present/i.test(timeLine);
    const start = years.length ? Math.min(...years) : 0;
    const end = isPresent
        ? new Date().getFullYear()
        : years.length
            ? Math.max(...years)
            : start;
    return { start, end, isPresent };
};

const locationOf = (timeLine = '') => {
    const tail = timeLine.split('.').pop().trim();
    return tail || 'Unknown';
};

const isRemote = (timeLine = '') => /remote/i.test(timeLine);

const FILTERS = ['All', 'Remote', 'On-site'];

const Timeline = () => {
    const [filter, setFilter] = useState('All');

    const entries = useMemo(() => {
        return workExperience
            .map((work, index) => ({
                ...work,
                index,
                ...parseYears(work.timeLine),
                remote: isRemote(work.timeLine),
            }))
            .sort((a, b) => b.start - a.start || b.end - a.end);
    }, []);

    const visible = entries.filter((entry) => {
        if (filter === 'Remote') return entry.remote;
        if (filter === 'On-site') return !entry.remote;
        return true;
    });

    const yearsSpanned = useMemo(() => {
        const starts = entries.map((e) => e.start).filter(Boolean);
        const ends = entries.map((e) => e.end).filter(Boolean);
        if (!starts.length) return 0;
        return Math.max(...ends) - Math.min(...starts);
    }, [entries]);

    return (
        <main className="timeline">
            <header className="timelineHeader">
                <Link to="/" className="timelineBack">&larr; back home</Link>
                <h1>Career Timeline</h1>
                <p className="timelineIntro">
                    Every role, plotted end to end. The journey is not a straight
                    line &mdash; that&apos;s the point.
                </p>
                <div className="timelineStats">
                    <div className="timelineStat">
                        <span className="timelineStatNum">{entries.length}</span>
                        <span className="timelineStatLabel">roles</span>
                    </div>
                    <div className="timelineStat">
                        <span className="timelineStatNum">{yearsSpanned}</span>
                        <span className="timelineStatLabel">years spanned</span>
                    </div>
                    <div className="timelineStat">
                        <span className="timelineStatNum">
                            {entries.filter((e) => e.remote).length}
                        </span>
                        <span className="timelineStatLabel">remote</span>
                    </div>
                </div>
                <div className="timelineFilters">
                    {FILTERS.map((option) => (
                        <button
                            key={option}
                            className={
                                filter === option
                                    ? 'timelineFilter active'
                                    : 'timelineFilter'
                            }
                            onClick={() => setFilter(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </header>

            <ol className="timelineList">
                {visible.map((entry) => (
                    <li className="timelineItem" key={`${entry.title}-${entry.index}`}>
                        <div className="timelineMarker" />
                        <div className="timelineCard">
                            <div className="timelineCardTop">
                                <span className="timelineYear">
                                    {entry.start || '—'}
                                    {entry.isPresent ? ' → now' : ''}
                                </span>
                                <span
                                    className={
                                        entry.remote
                                            ? 'timelineBadge remote'
                                            : 'timelineBadge'
                                    }
                                >
                                    {entry.remote ? 'Remote' : 'On-site'}
                                </span>
                            </div>
                            <h2 className="timelineTitle">{entry.title}</h2>
                            <p className="timelineLocation">
                                {locationOf(entry.timeLine)}
                            </p>
                            <p className="timelineText">{entry.text}</p>
                        </div>
                    </li>
                ))}
                {!visible.length && (
                    <li className="timelineEmpty">No roles match this filter.</li>
                )}
            </ol>
        </main>
    );
};

export default Timeline;
