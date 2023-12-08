import React, { useState } from 'react'


const Work = ({ title, text, image, timeLine }) => {
    return (
        <div className="internshipCard">
        <div>
            <img src={image} alt={title} />
            <p className='bold2'><span className='bold '>{title}</span>
                <br />
                {text}
            </p>
        </div>
        <p className='internshipDate'>{timeLine}</p>
    </div>
    )
}

export default Work