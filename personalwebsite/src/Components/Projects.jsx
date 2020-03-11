import React, {Component} from 'react'
import '../Styles/Projects.css'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            projectList: []
        }
    }

    componentDidMount = () => {

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