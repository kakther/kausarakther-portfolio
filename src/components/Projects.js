import React from 'react'

function Projects() {
    return(
        <div className="projects-container">
            <h1 id="projectH1">Current Projects</h1>
            <hr id="project-divider" />
            <ul className="projects-ul">

                <li>
                    <a href='https://zarafund.herokuapp.com/fund'><img src="https://i.imgur.com/642ADCD.png" alt="Project1"/>
                    </a>
                    <h3 className="projectTitle">zarafund</h3>
                    <div className='icon'>
                    <ul className='icon-ul'>
                    <li>
                        <a href="https://zarafund.herokuapp.com/fund"><i class="fas fa-external-link-square-alt"></i></a>
                    </li>
                    <li >
                        <a href="https://github.com/kakther/project-two"><i class="fab fa-github-square"></i></a>
                    </li>
                    </ul>
                    </div>
                    <p > A full CRUD app that allows the user to add, edit, and delete orginations.</p>
                    <ul className='lag'>
                        <li>JS(EJS)</li>
                        <li>Node.js</li>
                        <li>Mongoose</li>
                        <li>Express</li>
                        <li>mongoDB</li>

                    </ul>

                </li>


                <li>
                    <a href='https://peaceful-caverns-65474.herokuapp.com/'><img src="https://i.imgur.com/nrNrig1.png" alt="Project2"/>
                    </a>
                    <h3 className="projectTitle">song-app</h3>
                    <div className='icon'>
                    <ul className='icon-ul'>
                    <li>
                        <a href="https://peaceful-caverns-65474.herokuapp.com/"><i class="fas fa-external-link-square-alt"></i></a>
                    </li>
                    <li >
                        <a href="https://github.com/ryanimd/Song-App"><i class="fab fa-github-square"></i></a>
                    </li>
                    </ul>
                    </div>
                    <p >
                        We created a full CRUD app that allows the user to add, edit, and delete songs from their playlist. A Full-Stack CRUD SPA built with JS, React, Express, MongoDB, Mongoose and NodeJS. I had the pleasure of collaborating with Ryani Durham on this application.
                    </p>
                    <ul className='lag'>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>mongoDB</li>
                
                    </ul>

                </li>
                

                <li>
                <a href='https://movie-basement.herokuapp.com/'><img src="https://i.imgur.com/x5h3hGo.png" alt="Project3"/>
                </a>
                <h3 className="projectTitle">movie-basement</h3>
                <div>
                    <ul className='icon-ul'>
                    <li>
                        <a href="https://peaceful-caverns-65474.herokuapp.com/"><i class="fas fa-external-link-square-alt"></i></a>
                    </li>
                    <li >
                        <a href="https://github.com/lanegrim/movie-basement-front-end"><i class="fab fa-github-square"></i></a>
                    </li>
                    </ul>

                </div>
                <p>We initially set out to create a full-CRUD app using a React front end and a Django back end. With our mutual love for movies at the center of the project, we have attempted to create a space for fellow movie-lovers to create catalogues of their favorite (and least favorite) films, complete with ratings. In order to make the process of building and maintaining a collection of entries as seamless as possible, we have integrated the OMDB API to allow users to search for data when creating new entries.</p>

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
                    <h3>zarafund</h3>
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