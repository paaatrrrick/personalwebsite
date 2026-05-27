const sideProjectsTitle = 'How I actually ship side projects';
const sideProjectsDate = 'February 2026';

const content =
<main>
    <h1>{sideProjectsTitle}</h1>
    <date>{sideProjectsDate}</date>
    <p>
        Most of my side projects used to die in the same place — somewhere
        between "the auth flow works" and "real users could touch this."
        The three rules below are what finally got me past it.
    </p>
    <h2>1. Pick something you can demo in a single screenshot</h2>
    <p>
        If you can't describe the project as a single screenshot, the scope is
        wrong. The screenshot doesn't have to be pretty. It just has to be
        legible to someone who has never heard of the project.
    </p>
    <h2>2. Deploy before you build</h2>
    <p>
        Spend the first hour deploying a "hello world" to the domain you're
        going to use. Everything is easier after that — you debug
        incrementally instead of pushing one terrifying first deploy at the end.
    </p>
    <h2>3. Ship to one real person on day one</h2>
    <p>
        Not a tweet. Not a Show HN. One person, by name, who will actually
        click the link and tell you what is broken. Their feedback is the
        thing that determines whether you keep going.
    </p>
</main>;

const sideProjects = {
    title: sideProjectsTitle,
    date: sideProjectsDate,
    content,
};

export default sideProjects;
