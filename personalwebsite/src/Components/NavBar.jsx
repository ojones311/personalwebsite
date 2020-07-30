import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/NavBar.css'

const NavBar = () => {
    return(
        <div className= 'nav-bar'>     
            <nav id='nav'>
                <Link to= "/"> Home </Link>{" "}
                <Link to= "/projects"> Projects </Link>{" "}
                <Link to= "/skills"> Skills </Link>{" "}
                <a href='https://docs.google.com/document/d/1Dm0UPHdxjRFAPbNWVOdtsnjxpHXK58VigH6fRZtaQoU/edit#heading=h.85r1lcob89ni'>Resume</a>
            </nav>
            
        </div>
    )
}



export default NavBar