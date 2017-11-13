import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// styles
import './App.css';

// components (similar to web pages)
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header />

          <Route exact path='/' component={ About }/>

          <Route path='/about' component={ About }/> */}

          <Route path='/skills' component={ Skills }/>

          <Route path='/portfolio' component={ Portfolio }/>

        <Footer />

      </div>
    );
  }
}

export default App;
