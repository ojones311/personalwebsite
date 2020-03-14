import React, {Component} from 'react'
import '../Styles/Projects.css'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            projectList: [
                {  
                    name: 'MemeMe',
                    description: 'A Full-Stack Web Application'
                },
                {
                    name: 'Winstagram',
                    description: 'A Full stack Web Application'
                },
                {
                    name: 'Tekpack',
                    description: 'A Full Stack Web Application'
                },
                {
                    name: 'Twitter Clone',
                    description: 'A HTML and CSS Twitter Clone'
                }
            ]
        }
    }

    componentDidMount = () => {
        this.renderProjects()
    }
    
    renderProjects = () => {
        const {projectList} = this.state
        return(
            projectList.map(proj => {
                <div id={proj.name}>
                    <h2>{proj.name}</h2>
                    <h4>{proj.description}</h4>
                    <div id='link'>
                        <a href></a>
                    </div>
                </div>
            })
        )  
    } 
    render(){
        return(
            <div className='container'>
                <h1 id='heading'>
                    Projects
                </h1>
            </div>
        )
    }
}



export default Projects 