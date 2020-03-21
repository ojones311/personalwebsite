import React, {Component} from 'react'
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
                    mission: 'Tekpack is a web application that allows fashion designers to easily communicate the specs and model of a clothing piece for factories to make a sample. We aim to cut down textile waste in the supply chain by lowering the amount of samples needed to make clothing.',
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
                }
            ]
        }
    }

    redirectToGithubPage = (id) => {
        const {projectList} = this.state
        window.location.href = projectList[id].github
    }

    redirectToLivePage = () => {
        console.log('redir to live')
    } 
   

    render(){
        const {projectList} = this.state
        return(
            <div className='container'>
                <h1 id='heading'>Projects</h1>      
                <div className='project-map'>
                    {projectList.map(proj => {
                        return (
                            <div id={proj.name} key={proj.id}>
                                <h2 id='proj-title'>{proj.name}</h2>
                                <p id={'mission' + proj.id}>{proj.mission}</p>
                                <div id='link-buttons' key={proj.id}>
                                    <button id={proj.name + '-githubbutton'} onClick={() => this.redirectToGithubPage(proj.id)}>Github</button>
                                    <button id={proj.name + '-livebutton'} onClick={this.redirectToLivePage}>Live</button>
                                </div>
                            </div>
                        )
                    })
                } 
                </div>
            </div>
        )
    }
}



export default Projects 