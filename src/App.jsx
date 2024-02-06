import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Blog from './Pages/Blog.jsx';
import Contact from './Pages/Contact.jsx';
import Navigation from './Components/Navigation.jsx';
import './Assets/Styles/Pages/App.css';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/shop' Component={Shop} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/services' Component={Services} />
          <Route exact path='/blog' Component={Blog} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )

}

export default App;