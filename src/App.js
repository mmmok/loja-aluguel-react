import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Alugar from './Alugar';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/dashboard'>Dashboard</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/cadastro'>Itens e Clientes</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/alugar'>
            <Alugar />
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path='/cadastro'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}