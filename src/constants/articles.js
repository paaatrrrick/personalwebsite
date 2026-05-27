import netflix from './articles/netflix';
import sideProjects from './articles/sideProjects';
import aiDevTools from './articles/aiDevTools';

const articles = [
    { title: netflix.title, date: netflix.date, id: 'netflix' },
    { title: sideProjects.title, date: sideProjects.date, id: 'side-projects' },
    { title: aiDevTools.title, date: aiDevTools.date, id: 'ai-dev-tools' },
];

const idsAndArticles = {
    'netflix': netflix.content,
    'side-projects': sideProjects.content,
    'ai-dev-tools': aiDevTools.content,
}


const getArticle = (id) => {
    return idsAndArticles[id];
}

export { articles, getArticle };
