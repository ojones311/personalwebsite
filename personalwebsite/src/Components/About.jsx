import React from 'react'
import {useSpring, animated} from 'react-spring'
import '../Styles/About.css'

const About = () => {
    const fade = useSpring({opacity:1, from: {opacity:0}})
    return(
        <div className='about-page'>
            <animated.div style={fade}>
            <div className='bio-container'> 
                <p id='bio'>
                    I'm based in Bushwick {'=>'} Brooklyn,NY. I love to snowboard, play soccer, solve puzzles, and cook. There isn't anything that doesn't interest me if it's interesting. So lets make something that people love to use, something they can't picture their life without. Knowing I had that kind of impact and ability to brighten someones day is why I type away.
                </p>
            </div>
            </animated.div>
        </div>
    )
}





export default About 