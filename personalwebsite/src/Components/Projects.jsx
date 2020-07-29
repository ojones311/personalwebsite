import React, {Component} from 'react'
import ProjectCard from './ProjectCard.jsx'
import '../Styles/Projects.css'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            projectList: [
                {   
                    id: 0,
                    name: 'MemeMe',
                    description: 'A Full-Stack Web Application built with React and Express. Using React JS for the frontend and Express JS for the backend. A RESTful API that uses a PostgreSql for database management.' ,
                    mission: 'MemeMe is a social media site where users can post their favorite memes. Users can add friends and see the memes their friends post as well.',
                    github: 'https://github.com/ojones311/MemeMe',
                    live:''
                },
                {   
                    id: 1,
                    name: 'Winstagram',
                    description: 'A Full stack Web Application built with EJS and Express. Using External Javascript Templates for the frontend and Express JS for the backend. A RESTful API that uses a PostgreSQL for database management.',
                    mission: 'Winstagram is a social media site where users can post their daily wins and views the positive steps other users are taking in their lives. We want a positive platform where people are motivated to be their best',
                    github: 'https://github.com/ojones311/winstagram',
                    live:''
                },
                {   
                    id: 2,
                    name: 'Tekpack',
                    description: 'A Full Stack Web Application built with React and Express. It uses a RESTful API and PostgreSQL for the database.',
                    mission: 'Tekpack is a web application that helps fashion designers easily communicate the specs and model of a clothing piece for their suppliers. We aim to cut down textile waste by lowering the amount of samples needed to make clothing.',
                    github: 'https://github.com/ojones311/Tekpack',
                    live:''
                },
                {   
                    id: 3,
                    name: 'Twitter-Clone',
                    description: 'A HTML and CSS Twitter Clone. Built with HTML and CSS.',
                    mission: ' A simple Twitter clone of their landing page.',
                    github: 'https://github.com/ojones311/Pursuit-Core-Web-Twitter-CSS-Assignment',
                    live:''
                },
                {
                    id: 4,
                    name: 'Choral',
                    description:'A Full Stack Web Application built with React and Express. Howler JS and the Web Audio API are used for audio processing. Media Player API is used for recording',
                    mission: 'Choral is a remote musical playground where multiple users can collaborate on a single song. Its our solution for remote musical collaboration',
                    github: 'https://github.com/PeterFiorentino/Choral',
                    live: 'https://choral.herokuapp.com/'
                }
            ]
        }
    }

    
   

    render(){
        const {projectList} = this.state
        return(
            <div className='container'>
                <h1 id='heading'>Projects</h1>      
                <div className='project-map'>
                    {projectList.map(proj => {
                        return(
                            <ProjectCard key={proj.id} id={proj.id} name={proj.name} description={proj.description} mission={proj.mission} github={proj.github} live={proj.live}/>
                        )
                    })
                } 
                </div>
            </div>
        )
    }
}



export default Projects 