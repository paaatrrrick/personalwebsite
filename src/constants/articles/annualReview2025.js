const annualReviewTitle = 'Annual review: 2025';
const annualReviewDate = 'January 2026';

const content =
<main>
    <h1>{annualReviewTitle}</h1>
    <date>{annualReviewDate}</date>
    <p>
        Every January I write one of these to figure out what the last year
        was actually about. The themes never match what I predicted in
        December.
    </p>
    <h2>What went well</h2>
    <ul>
        <li>Joined Mintlify and shipped on a team I'm genuinely proud of.</li>
        <li>Wrote more publicly than any year previous — three essays past 1,000 reads.</li>
        <li>Ran my first half-marathon without injuring my knee.</li>
    </ul>
    <h2>What didn't</h2>
    <ul>
        <li>Tried to learn Rust three separate times. Got nowhere three separate times.</li>
        <li>Kept saying yes to coffee chats long past the point of usefulness.</li>
        <li>Sleep schedule was a disaster from August through October.</li>
    </ul>
    <h2>For 2026</h2>
    <ul>
        <li>Ship the AI calendar side project to actual users — even 10.</li>
        <li>Replace coffee chats with one monthly written Q&amp;A thread.</li>
        <li>One real Rust project, end-to-end, no abandoning at chapter 4.</li>
    </ul>
</main>;

const annualReview2025 = {
    title: annualReviewTitle,
    date: annualReviewDate,
    content,
};

export default annualReview2025;
