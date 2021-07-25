import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/footer" component={Footer} />
        </Switch>
        

      </div>
      <div>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
