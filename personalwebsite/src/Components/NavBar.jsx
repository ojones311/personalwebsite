import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/NavBar.css'

const NavBar = () => {
    return(
        <div className= 'nav-bar'>     
            <nav id='nav'>
                <Link to= "/"> Home </Link>{" "}
                <Link to= "/about"> About </Link>{" "}
                <Link to= "/projects"> Projects </Link>{" "}
                <Link to= "/skills"> Skills </Link>{" "}
                <Link to= "/resume"> Resume</Link>{" "} 
            </nav>
        </div>
    )
}



export default NavBar