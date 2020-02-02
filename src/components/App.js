import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../css/App.css';
import '../css/carousel.css';
import 'waypoints/lib/noframework.waypoints.min'

function App() {
  useEffect(() => {
    function handleAnimation() {
      new window.Waypoint({
        element: document.querySelector('.isAnimated'),
        handler: function () {
          this.element.classList.add('animated', 'fadeInUp')
        },
        offset:'20%'
      })
    }
    window.addEventListener('load', handleAnimation)
    return () => {
      window.removeEventListener('load', handleAnimation)
    };
  }, [])

  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;



