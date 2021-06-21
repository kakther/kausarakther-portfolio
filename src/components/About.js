import React from 'react'
import picture from './assets/profile.jpg'
import PB from './Pb'

function About() {
    return(
        <div>
        
        <div className="about">
            <img id='portfolio-picture' src={picture} alt='Portfolio Picture'></img>
            
            <p id='about-me'>
                <h1>hi!</h1>
                I'm Kausar, a software engineer, full stack developer and QA engineer.
            </p>
            
                
           <div>
           
           </div>
        </div>
            <PB/>
        </div>
    )
}


export default About