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
    redirectToGithub = () => {
        console.log('clicked')
        window.location.href = ('https://github.com/ojones311')
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
                <div className='portfolio_pic'>
                    <img src='./pics/portfolio_pic.jpg' alt='Profile Picture'></img>
                </div>
                <div className='main-card'>
                    <h1 id='job-title'>Full Stack Web Developer</h1>
                    <div className='social-buttons'>
                        <div id='first-sc'>
                            <img id='contact' src='./pics/GithubIcon.png' alt='Github' onClick={this.redirectToGithub}></img>
                            {/* <p onClick={this.redirectToGithub}>Github</p> */}
                            <a href='https://github.com/ojones311' target='blank'>Github</a>
                        </div>
                        <div id='second-sc'>
                            <img id='contact' src='./pics/linkedin.png' alt='LinkedIn'></img>
                        </div>
                        <div id='third-sc'>
                            <img id='contact' src='./pics/facebook.png' alt='Facebook'></img>
                        </div>
                        <div id='fourth-sc'>
                            <img id='contact' src='./pics/twitter.png' alt='Twitter'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home