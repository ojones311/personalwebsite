import React from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Resume from './Components/Resume'
import ContactFooter from './Components/ContactFooter'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='full-body'>
        <div className='nav'>
          <NavBar />
        </div> 
        <div>
          <Switch>
              <Route exact path= "/" 
                component={Home}
              />
              <Route path= "/about" 
                render={() => <About />}
              />
              <Route path="/projects"
                render={() => <Projects />}
              />
              <Route path="/skills"
                render={() => <Skills />}
              />
              <Route path= "/resume"
                render={() => <Resume />}
              />
          </Switch>
        </div>
          {/* <ContactFooter /> */}
      </div>
    </div>
  );
}

export default App;
