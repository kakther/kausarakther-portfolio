import React from 'react'
import picture from './assets/profile.jpg'
// import PB from './Pb'


function About() {
    return(
        <div className="about-container">
            <img id='portfolio-picture' src={picture} />
            <div className="about">
                <p>
                    My passion for technology motivated me to leave the <strong>medical</strong> field for technology world 
                    and become an expert in <strong>software testing</strong>. I strongly believe I will be a good engineer because  
                    I am truly passionate about solving complex problems. I am a team player who does not compromise with 
                    quality. I am always eager bring best practices into the table. 
                </p>
                <br />
                <a href='https://drive.google.com/file/d/1zc5oCjYIjFXh0EwwebQjMtK9mXPxVMDI/view?usp=sharing' rel="noreferrer" target="_blank">
                    <button id='resume-button'>Click To View Resume</button>
                </a>

            </div>
          
        </div>
    )
}


export default About