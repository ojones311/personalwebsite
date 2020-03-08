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
        // console.log(Quote.getRandomQuote())
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
                <h1>Owen Jones </h1>
                <img id='main-pic' src='../IMG_8807.jpeg' alt='Main'></img>
                <div className='random-quote'>
                    <p>{quote.text}</p>
                    <h4>{quote.author}</h4>
                </div>
            </div>
        )
    }
}


export default Home