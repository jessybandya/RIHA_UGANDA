import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
       <Router>
           <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
           </Switch>
       </Router>
    </div>
  );
}

export default App;
