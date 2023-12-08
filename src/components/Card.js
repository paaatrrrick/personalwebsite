const Card = (props) => {
    const { text, image, title, isVideo, links } = props;
    return (
        <div className="codingChunk">
            <div className="codingChunk-content">
                <div>
                    {isVideo ? <video className="codingImage" autoPlay controls>
                        <source src={image} type="video/mp4" />
                    </video>
                        : <img src={image} className="codingImage" />}
                    <p className='codingParagraph'><span className='bold'>{title}: </span>
                        <br />
                        <>
                        {text.map((paragraph) => {
                            return (
                                <>
                                {paragraph}<br/>
                                </>
                            )

                        })}
                        </>
                    </p>
                </div>

                <div className="card-link">
                    {links.map((link, index) => {
                        return (
                            <a href={link.href} target="_blank" rel="noreferrer" className={index === links.length - 1 ? 'link' : 'link mR'}>{link.text}</a>
                        )
                    })}
                </div>
            </div>

        </div >
    );
}

export default Card;