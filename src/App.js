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
import BlogPostDetail from './components/blogDetail';

import Header from './components/common/header'
import Footer from './components/common/footer'

function App() {
  return (
    <div>
      {/* navigation */}
      <Header />
      {/* router */}
      <Switch>
        <Route exact path="/" render={(routerProps) => <Home {...routerProps} />} />
        <Route path="/about" render={(routerProps) => <About {...routerProps} />} />
        <Route path="/products" render={(routerProps) => <Products {...routerProps} />} />
        <Route path="/contact" render={(routerProps) => <Contact {...routerProps} />} />
        <Route path="/blog/:id" render={(routerProps) => <BlogPostDetail {...routerProps} />} />
        <Route path="/blog" render={(routerProps) => <Blog {...routerProps} />} />

      </Switch>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
