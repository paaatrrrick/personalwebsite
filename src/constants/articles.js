import netflix from './articles/netflix';

const articles = [
    { title: netflix.title, date: netflix.date, id: 'netflix' }
];

const idsAndArticles = {
    'netflix': netflix.content,
}


const getArticle = (id) => {
    return idsAndArticles[id];
}

export { articles, getArticle };