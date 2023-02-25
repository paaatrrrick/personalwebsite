const Card = (props) => {
    const { text, image, title, isVideo, links } = props;
    console.log(isVideo);
    return (
        <div className="codingChunk">
            <div>
                {isVideo ? <video className="codingImage" autoPlay>
                    <source src={image} type="video/mp4" />
                </video>
                    : <img src={image} className="codingImage" />}
                <p className='codingParagraph'><span className='bold'>{title}: </span>
                    <br />

                    {text}
                </p>
            </div>

            <div className="card-link">
                {links.map((link, index) => {
                    return (
                        <a href={link.href} target="_blank" rel="noreferrer" className={index === links.length - 1 ? 'link' : 'link mR'}>{link.text}</a>
                    )
                })}
            </div>
        </div >
    );
}

export default Card;