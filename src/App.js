import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';

import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import Contact from './components/contact';
import Blog from './components/blog';

import Header from './components/common/header'
import Footer from './components/common/footer'

function App() {
  return (
    <Router>
      <div>
        {/* navigation */}
        <Header />

        {/* router */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
