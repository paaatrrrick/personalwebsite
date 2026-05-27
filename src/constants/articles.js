import netflix from './articles/netflix';
import sideProjects from './articles/sideProjects';
import aiDevTools from './articles/aiDevTools';
import annualReview2025 from './articles/annualReview2025';

const articles = [
    { title: netflix.title, date: netflix.date, id: 'netflix' },
    { title: sideProjects.title, date: sideProjects.date, id: 'side-projects' },
    { title: aiDevTools.title, date: aiDevTools.date, id: 'ai-dev-tools' },
    { title: annualReview2025.title, date: annualReview2025.date, id: 'annual-review-2025' },
];

const idsAndArticles = {
    'netflix': netflix.content,
    'side-projects': sideProjects.content,
    'ai-dev-tools': aiDevTools.content,
    'annual-review-2025': annualReview2025.content,
}


const getArticle = (id) => {
    return idsAndArticles[id];
}

export { articles, getArticle };
