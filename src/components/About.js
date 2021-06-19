import React from 'react'
import picture from './assets/profile.jpg'
import PB from './Pb'

function About() {
    return(
        <div>
        
        <div className="about">
            <img id='portfolio-picture' src={picture}></img>
            
            <p id='about-me'>
                <h1>hi!</h1>
                I'm Kausar, a full stack web developer, QA engineer and biologist.
            </p>
           <div>
           
           </div>
        </div>
            <PB/>
        </div>
    )
}


export default About