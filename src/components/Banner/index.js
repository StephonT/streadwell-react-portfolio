import React from 'react';
import bannerImage from "../../assets/images/face.png"

function Banner() {
    return (
        <div className="hero-banner">
            <img className='w-100'
                src={bannerImage}
                alt="hero banner with name and portrait of Stephon Treadwell" />
        </div>
    )
}

export default Banner;