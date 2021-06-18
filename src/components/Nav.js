import React from 'react'
import {Link} from 'react-router-dom'

function Nav (){
    return(
        <div className="nav">
            <h3>KA</h3>
            <ul className="nav-links">
                <Link to="/about">
                <li>about</li>
                </Link>

                <Link to="/skills">
                <li>skills</li>
                </Link>

                <Link to="/projects">
                    <li>projects</li>
                </Link>

                <Link to="/contact">
                <li>contact</li>
                </Link>
            </ul>
        </div>
    )
}


export default Nav