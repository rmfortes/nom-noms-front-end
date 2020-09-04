import React from 'react';
import './style.css'

const OnboardingBackground = props => {
    return(
        <div>
            <video autoPlay muted loop>
                <source src={props.src} type = "video/mp4"></source>
            </video>
            <div>
                <p>Stock footage provided by Videvo, downloaded from www.videvo.net</p>
            </div>
        </div>
    )
}

export default OnboardingBackground;