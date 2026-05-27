import testimonials from '../constants/testimonials';
import './testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonialsHeader">
                <h2>What people say</h2>
                <hr />
            </div>
            <div className="testimonialsGrid">
                {testimonials.map((t) => (
                    <figure className="testimonialCard" key={t.name}>
                        <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                        <figcaption>
                            <strong>{t.name}</strong>
                            <span>{t.role}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
