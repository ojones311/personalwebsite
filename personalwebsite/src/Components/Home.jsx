import React, {Component} from 'react'
import Quote from 'inspirational-quotes'
import '../Styles/Home.css'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            quote: '',
            links: {
                github: 'https://github.com/ojones311'
            } 
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
    // redirectToGithub = () => {
    //     console.log('clicked')
    //     window.location.href = ('https://github.com/ojones311')
    // }
    render(){
        const {quote} = this.state
        return(
            <div className='home-page'>
                <h1 id='home-heading'>Owen Jones </h1>
                <h2 id='job-title'>Full Stack Web Developer</h2>
                <div className='portfolio_pic'>
                    <img id='main-pic' src='./pics/portfolio_pic.jpg' alt='Profile'></img>
                </div>
                <div className='random-quote' onClick={this.changeQuote}>
                    <h3>{quote.text}</h3>
                    <h2>{quote.author}</h2>
                </div>
                <div className='main-card'>
                    <div className='inner-container'>
                    <h1 id='contact-social'>Contact me:</h1>
                    <div className='social-buttons'>
                        <div id='first-sc'>
                            <a target='blank' href='https://github.com/ojones311'>
                                 <img id='contact' src='./pics/GithubIcon.png' alt='Github'></img>
                            </a>
                            <p> My Github</p>
                        </div>
                        <div id='second-sc'>
                            <a target= 'blank' href='https://www.linkedin.com/in/owen-jones-92a848a6/'>
                            <img id='contact' src='./pics/linkedin.png' alt='LinkedIn'></img>
                            </a>
                            <p> My LinkedIn</p>
                        </div>
                        <div id='third-sc'>
                            <a target='blank' href='https://www.facebook.com/owen.jones.589'>
                            <img id='contact' src='./pics/facebook.png' alt='Facebook'></img>
                            </a>
                            <p>My Facebook</p>
                        </div>
                        <div id='fourth-sc'>
                            <a target='blank' href='https://twitter.com/owenthefirst93'>
                                <img id='contact' src='./pics/twitter.png' alt='Twitter'></img>
                            </a>
                            <p>My Twitter</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Home