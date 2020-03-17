import React, {Component} from 'react'
import Quote from 'inspirational-quotes'
import '../Styles/Home.css'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            quote: '' 
        }
    }
    componentDidMount = () => {
        this.changeQuote()
    }
    changeQuote = () => {
        const randomQuote = Quote.getQuote()
        this.setState({
            quote: randomQuote
        })
    }
    render(){
        const {quote} = this.state
        return(
            <div className='home-page'>
                <h1 id='home-heading'>Owen Jones </h1>
                <div className='random-quote' onClick={this.changeQuote}>
                    <h3>{quote.text}</h3>
                    <h2>{quote.author}</h2>
                </div>
            </div>
        )
    }
}


export default Home