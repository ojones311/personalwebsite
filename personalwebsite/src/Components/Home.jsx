import React, {Component} from 'react'
import '../Styles/Home.css'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            elements: true 
        }
    }
    render(){
        return(
            <div className='home-page'>
                <h1>Owen Jones </h1>
                <img id='main-pic' src='../IMG_8807.jpeg' alt='Main'></img>
            </div>
        )
    }
}


export default Home