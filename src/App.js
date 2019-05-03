import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import HeaderText from './components/HeaderText/HeaderText'
import AboutSection from './components/AboutSection/AboutSection'
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"style={{zIndex: -1}} >
          <Nav />
          <HeaderText style={{zIndex: 1}} />
        </header>

        
        <AboutSection />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

