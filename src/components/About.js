import React from 'react'
import picture from './assets/profile.jpg'
import Hire from './Hire.js'
// import PB from './Pb'


function About() {
    return(
        <div>
            <div className="aboutMe">
                <h1 id="h1Me">ABOUT ME</h1>
                <hr id="meDivider"/>
            </div>
            
        <div className="about-container">
            <img id='portfolio-picture' src={picture}  alt="Kausar"/>
            <div className="about">
                <p>
                    I am an enthusiastic and self-motivated software engineer, who loves challenges and solving complex problems. My mission is to help companies to expand their presence in the digital world as well as the security and risk control fields. I strive to combine my passion for development with quality code in order to exceed both internal and client expectations. I’m an avid learner who’s always willing to try out something new! I am now available for a challenging and rewarding position in the software industry to add value to projects as a <strong>Software Engineer/ Full Stack Developer/ QA Engineer</strong>.
                </p>
                <br />
                
                <a href='https://drive.google.com/file/d/1zc5oCjYIjFXh0EwwebQjMtK9mXPxVMDI/view?usp=sharing' rel="noreferrer" target="_blank">
                    <button id='resume-button'>Click To View Resume</button>
                </a>
                <hr />
            </div>    
        </div>
        
        <Hire/>

        
        </div>
    )
}


export default About