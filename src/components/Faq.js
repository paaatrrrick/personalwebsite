import { Link } from 'react-router-dom';
import faq from '../constants/faq';
import './faq.css';

const Faq = () => {
    return (
        <main className="faq">
            <header className="faqHeader">
                <Link to="/" className="faqBack">← Back home</Link>
                <h1>FAQ</h1>
                <p>Questions I get often enough to write down.</p>
            </header>
            {faq.map((item) => (
                <section className="faqItem" key={item.question}>
                    <h2>{item.question}</h2>
                    <p>{item.answer}</p>
                </section>
            ))}
        </main>
    );
};

export default Faq;
