import React, {Component} from 'react'

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
            </div>
        )
    }
}


export default Home