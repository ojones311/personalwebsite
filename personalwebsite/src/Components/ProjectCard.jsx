import React from 'react'
import '../Styles/ProjectCard.css'

const ProjectCard = (props) => {
    const {id, name, mission, description, github, live, redirectToGithubPage, redirectToLivePage} = props
    return (
        <div id='card'>
            <h2 id='proj-title'>{name}</h2>
            <p id={'mission' + id}>{mission}</p>
            {/* <p>{description}</p> */}
                <div id='link-buttons' key={id}>
                    <button id={name + '-githubbutton'} onClick={() => redirectToGithubPage(id)}>Github</button>
                    <button id={name + '-livebutton'} onClick={() => redirectToLivePage()}>Live</button>
            </div>
        </div>
        )
}

export default ProjectCard