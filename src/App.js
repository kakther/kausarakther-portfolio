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
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>

      </div>
    </Router>

  );
}

export default App;
