import React from 'react';
import { getArticle } from "../constants/articles";
import { Link } from "react-router-dom";
import PatrickPhoto from '../images/face.JPG';

const ViewBlog = (props) => {
    const id = props.match.params.id;
    const article = getArticle(id);
    return (
        <div className="view-blog">
            <div className="navbar">
                <div className="navbarleft"><p>patrick foster's blog</p></div>
                <Link className="navbarright" to={`/`}><img src={PatrickPhoto} /></Link>
            </div>
            <div className="view-blog-content">
                <div>
                    <h1>{article.title}</h1>
                    {article.context}
                </div>
            </div>
        </div>
    )
};

export default ViewBlog;