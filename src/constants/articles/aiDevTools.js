const aiDevToolsTitle = 'What AI dev tools actually changed about my workflow';
const aiDevToolsDate = 'March 2026';

const content =
<main>
    <h1>{aiDevToolsTitle}</h1>
    <date>{aiDevToolsDate}</date>
    <p>
        I've been using AI coding tools daily for about two years now. Here is
        what genuinely changed about how I work — and what stayed exactly the
        same.
    </p>
    <h2>Reading code I didn't write</h2>
    <p>
        The single biggest unlock is jumping into an unfamiliar codebase. The
        old loop was grep, read, grep, read. The new loop is "explain this
        module to me, then point me at the entry point." It compresses
        onboarding from days into hours.
    </p>
    <h2>Boilerplate is dead, sort of</h2>
    <p>
        Anything repetitive is now a one-shot prompt: SQL migrations,
        Zod schemas from a TypeScript interface, test scaffolding. I haven't
        hand-typed a basic CRUD route in months.
    </p>
    <h2>What didn't change</h2>
    <p>
        Hard design decisions are still mine. Naming things is still mine.
        Knowing which test to write and which not to write is still mine. The
        AI is great at "do the thing I described," not "decide what the thing
        should be."
    </p>
</main>;

const aiDevTools = {
    title: aiDevToolsTitle,
    date: aiDevToolsDate,
    content,
};

export default aiDevTools;
