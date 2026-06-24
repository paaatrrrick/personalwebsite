import { useState } from 'react';
import { Link } from 'react-router-dom';
import faq from '../constants/faq';
import './faq.css';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="faq">
            <header className="faqHeader">
                <Link to="/" className="faqBack">← Back home</Link>
                <h1>FAQ</h1>
                <p>Answers to the questions I get asked most often.</p>
            </header>
            <ul className="faqList">
                {faq.map((item, index) => (
                    <li key={item.question} className="faqItem">
                        <button
                            className="faqQuestion"
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            {item.question}
                        </button>
                        {openIndex === index && <p className="faqAnswer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Faq;
