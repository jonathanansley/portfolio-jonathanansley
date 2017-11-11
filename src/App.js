import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header />

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Route exact path='/' component={ Home }/>

          <Route path='/about' component={ About }/>

          <Route path='/skills' component={ Skills }/>

          <Route path='/portfolio' component={ Portfolio }/>

        <Footer />

      </div>
    );
  }
}

export default App;
