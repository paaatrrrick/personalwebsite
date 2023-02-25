import { articles } from "../constants/articles";
import { Link } from "react-router-dom";
import PatrickPhoto from '../images/face.JPG';
import './blog.css'


const Blog = () => {
    return (
        <div className="blog">
            <div className="navbar">
                <div className="navbarleft"><p>patrick foster's blog</p></div>
                <Link className="navbarright" to={`/`}><img src={PatrickPhoto} /></Link>
            </div>
            <div className="contnet">
                <h1 className="blogH1">Blogs</h1>
                {articles.map((article, index) => (
                    <div key={index}>
                        <Link className="blog-link" to={`/blog/${article.id}`}>{article.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;