import React, {Component} from 'react'
import Quote from 'inspirational-quotes'
import '../Styles/Home.css'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            elements: true,
            quote: '' 
        }
    }
    componentDidMount = () => {
        const randomQuote = Quote.getQuote()
        console.log('quote', randomQuote)
        this.setState({
            quote: randomQuote
        })
    }
    render(){
        const {quote} = this.state
        console.log(quote)
        return(
            <div className='home-page'>
                <h1 id='home-heading'>Owen Jones </h1>
                <div id='background-photo'>
                </div>
                <div className='random-quote'>
                    <h3>{quote.text}</h3>
                    <h2>{quote.author}</h2>
                </div>
            </div>
        )
    }
}


export default Home