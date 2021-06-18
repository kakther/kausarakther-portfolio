import React from 'react'
import picture from './assets/profile.jpg'

function About() {
    return(
        <div className="about">
            <img id='portfolio-picture' src={picture}></img>
            
            <p id='about-me'>
                My passion for technology motivated me to leave the <strong>medical</strong> field for technology world <br/> 
                and become an expert in <strong>software testing</strong>. I strongly believe I will be a good engineer because <br/> 
                I am truly passionate about solving complex problems. I am a team player who does not compromise with <br/>
                quality. I am always eager bring best practices into the table. 
            </p>
        </div>
    )
}


export default About