export const BOOKCLUB_ENABLED = process.env.REACT_APP_BOOKCLUB === 'on';

export const monthlyPicks = [
    { month: '2026-11', title: 'The Pragmatic Programmer', meetingDate: '2026-11-20', joinUrl: 'https://cal.com/patrick/bookclub' },
];

export const currentPick = (today = new Date()) =>
    monthlyPicks.find((pick) => pick.month === today.toISOString().slice(0, 7)) || null;
