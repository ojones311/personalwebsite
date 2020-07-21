import React from 'react'
import {useSpring, animated, useChain} from 'react-spring'
import '../Styles/Skills.css'

const Skills = () => {
    const fade = useSpring({opacity:1, from: {opacity:0}})

    
    return(
        <div>
            <h1 id='heading'> Skills </h1>
            <animated.div style={fade}>
                <div className='skill-list'>
                    <div id='js-icon'>
                        <img src='./pics/JSicon.png' alt='JS'></img>
                    </div>
                    <div id='html-icon'>
                        <img src='./pics/HTML5Icon.png' alt='HTML'></img>
                    </div>       
                    <div id='css-icon'>
                        <img src='./pics/CSS3Icon.png' alt='CSS'></img>
                    </div> 
                    <div id='nodejs-icon'>
                        <img src='./pics/NodejsIcon.png' alt='NODE'></img>
                    </div>
                    <div id='postgres-icon'>
                        <img src='./pics/PostgreSQLIcon.png' alt='PG'></img>
                    </div>
                    <div id='react-icon'>
                        <img src='./pics/ReactIcon.png' alt='REACT'></img>
                    </div>
                    <div id='github-icon'>
                        <img src= './pics/GithubIcon.png' alt='GITHUB'></img>
                    </div>
                    <div id='git-icon' alt='GIT'>
                        <img src='./pics/GitIcon.png'></img>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}





export default Skills