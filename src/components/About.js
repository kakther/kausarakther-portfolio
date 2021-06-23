import React from 'react'
import picture from './assets/profile.jpg'
// import PB from './Pb'


function About() {
    return(
        <div className="about-container">
            <img id='portfolio-picture' src={picture} />
            <div className="about">
                <p>
                    I am an enthusiastic and self-motivated software engineer, who loves challenges and solving complex problems. My mission is to help companies to expand their presence in the digital world as well as the security and risk control fields. I strive to combine my passion for development with quality code in order to exceed both internal and client expectations. I am a team player who does not compromise with quality. I am always eager to bring best practices into the table. 
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