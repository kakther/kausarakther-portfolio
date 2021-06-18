import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        

      </div>
      <div>
        <Contacts/>
      </div>
    </Router>
    
  );
}

export default App;
