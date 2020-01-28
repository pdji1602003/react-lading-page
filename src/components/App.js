import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../css/App.css';
import '../css/carousel.css';


function App() {
  return (
    <Router>
      <Header/>
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
