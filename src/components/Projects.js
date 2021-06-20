import React from 'react'

function Projects() {
    return(
        <div className="projects-container">
            <h3>projects</h3>
            <hr/>
            <ul className="projects-ul">
                <li>
                    <a href='https://peaceful-caverns-65474.herokuapp.com/'><img src="https://i.imgur.com/UuKkOJL.png"/>
                    </a>
                    <h4>song-app</h4>
                    <div className='icon'>
                        <a href='https://peaceful-caverns-65474.herokuapp.com/'><i class="fab fa-external-link-square-alt"></i></a>
                        <a href='https://github.com/ryanimd/Song-App'><i class="fab fa-github-square"></i></a>
                    </div>
                    <ul className='lag'>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                </li>

                <li>
                <a href='https://movie-basement.herokuapp.com/'><img src="https://i.imgur.com/x5h4hGo.png"/>
                </a>
                <h4>movie-basement</h4>
                <div>
                    <a href='https://movie-basement.herokuapp.com/'><i class="fas fa-external-link-square-alt"></i></a>
                    <a href='https://github.com/lanegrim/movie-basement-front-end'><i class="fab fa-github-square"></i></a>
                </div>
                <ul className='lag'>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Postgres</li>
                </ul>
            </li>
            {/*
            <li>
                    <a href='https://zarafund.herokuapp.com/'><img src=""/>
                    </a>
                    <h4>zarafund</h4>
                    <div>
                        <a href='https://zarafund.herokuapp.com/'><i class="fas fa-external-link-square-alt"></i></a>
                        <a href='https://github.com/kakther/project-two'><i class="fab fa-github-square"></i></a>
                    </div>
                    <ul className='lag'>
                        <li>JavaScript</li>
                        <li>Express.js</li>
                        <li>mongoDB</li>
                        <li>Bcrypt</li>
                    </ul>
                </li>
                */}
            </ul>
        </div>
    )
}


export default Projects