import React, { Component } from 'react';
import Header from './components/Header'
import HeroImage from './components/HeroImage';
import Footer from './components/Footer';
import './css/app.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <Header />
        </header>
        <div className="body-content">
          <div>
            <HeroImage />
          </div>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
