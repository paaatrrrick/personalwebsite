import netflix from './articles/netflix';
import sideProjects from './articles/sideProjects';

const articles = [
    { title: netflix.title, date: netflix.date, id: 'netflix' },
    { title: sideProjects.title, date: sideProjects.date, id: 'side-projects' },
];

const idsAndArticles = {
    'netflix': netflix.content,
    'side-projects': sideProjects.content,
}


const getArticle = (id) => {
    return idsAndArticles[id];
}

export { articles, getArticle };
