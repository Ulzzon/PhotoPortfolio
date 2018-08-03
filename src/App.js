import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faCamera } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import logo from './logo.svg';
import PageNavBar from './components/navbar';
import Blogpost from './components/blogpost';
import Home from './components/home';
import Error from './components/error';
import About from './components/about';
import MediaInfo from './components/socialMedia';


library.add(faStroopwafel);
library.add(faCamera);


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to MissOlssonsFoto</h1>
          </header>
        </div>
        <BrowserRouter>
          <div>
            <PageNavBar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/blog" component={Blogpost} />
              <Route path="/about" component={About} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        <footer className="App-footer">
          <MediaInfo />
        </footer>
      </div>
    );
  }
}

export default App;
