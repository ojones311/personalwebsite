import React, {Component} from 'react'
import '../Styles/Projects.css'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            projectList: [
                {   
                    id: 1,
                    name: 'MemeMe',
                    description: 'A Full-Stack Web Application built with React and Express. Using React JS for the frontend and Express JS for the backend. A RESTful API that uses a PostgreSql for database management.' ,
                    mission: 'MemeMe is a social media site where users can post their favorite memes. Users can add friends and see the memes their friends post as well.',
                    github: 'https://github.com/ojones311/MemeMe',
                    live:''
                },
                {   
                    id: 2,
                    name: 'Winstagram',
                    description: 'A Full stack Web Application built with EJS and Express. Using External Javascript Templates for the frontend and Express JS for the backend. A RESTful API that uses a PostgreSQL for database management.',
                    mission: 'Winstagram is a social media site where users can post their daily wins and views the positive steps other users are taking in their lives. We want a positive platform where people are motivated to be their best',
                    github: 'https://github.com/ojones311/winstagram',
                    live:''
                },
                {   
                    id: 3,
                    name: 'Tekpack',
                    description: 'A Full Stack Web Application built with React and Express. It uses a RESTful API and PostgreSQL for the database.',
                    mission: 'Tekpack is a web application that allows fashion designers to easily communicate the specs and model of a clothing piece for factories to make a sample. We aim to cut down textile waste in the supply chain by lowering the amount of samples needed to make clothing.',
                    github: 'https://github.com/ojones311/Tekpack',
                    live:''
                },
                {   
                    id: 4,
                    name: 'Twitter-Clone',
                    description: 'A HTML and CSS Twitter Clone. Built with HTML and CSS.',
                    mission: ' A simple Twitter clone of their landing page.',
                    github: 'https://github.com/ojones311/Pursuit-Core-Web-Twitter-CSS-Assignment',
                    live:''
                }
            ]
        }
    }
    redirectToGithubPage = () => {
        const {projectList} = this.state
        console.log('redir to github')
        window.location.href = ''
    }

    redirectToLivePage = () => {
        console.log('redir to live')
    }

    // renderProjects = () => {
    //     const {projectList} = this.state
    //         projectList.map(proj => {
    //             console.log('test', proj)
    //             return (
    //                 <div id={proj.name}>
    //                     <h2>{proj.name}</h2>
    //                     <h4>{proj.description}</h4>
    //                     <div id='link-button'>
    //                         <button>Click</button>
    //                     </div>
    //                 </div>
    //             )
    //         })

    // } 

    render(){
        const {projectList} = this.state
        return(
            <div className='container'>
                <h1 id='heading'>
                    Projects
                </h1>
                <div className='project-map'>
                    {projectList.map(proj => {
                        console.log('test', proj)
                        return (
                            <div id={proj.name}>
                                <h2 id={'project' + proj.id}>{proj.name}</h2>
                                <h4 id={'description' + proj.id}>{proj.description}</h4>
                                <p id={'mission' + proj.id}>{proj.mission}</p>
                                <div id='link-buttons'>
                                    <button id={proj.name + '-githubbutton'} onClick={this.redirectToGithubPage}>Github</button>
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