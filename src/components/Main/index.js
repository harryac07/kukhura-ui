import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import Home from 'components/home';
import About from 'components/about';
import Products from 'components/products';
import Contact from 'components/contact';
import Blog from 'components/blog';
import Login from 'components/login';
import BlogPostDetail from 'components/blogDetail';
import Admin from 'components/admin';

import Header from 'components/common/header'
import Footer from 'components/common/footer'
import ScrollToTop from 'components/common/components/ScrollToTop'

import { fetchCurrentUser } from './action'
import { checkAuthentication } from '../login/action'

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.props.fetchCurrentUser();
        console.log('abc')
        this.props.checkAuthentication();
    }
    render() {
        return (
            <div>
                {/* Scroll to top of the page on page transition */}
                <ScrollToTop />
                {/* navigation */}
                < Header />
                {/* router */}
                < Switch >
                    <Route exact path="/" render={(routerProps) => <Home {...routerProps} />} />
                    <Route path="/about" render={(routerProps) => <About {...routerProps} />} />
                    <Route path="/products" render={(routerProps) => <Products {...routerProps} />} />
                    <Route path="/contact" render={(routerProps) => <Contact {...routerProps} />} />
                    <Route path="/admin" render={(routerProps) => <Admin {...routerProps} />} />
                    <Route path="/(blog|product|service)/:id" render={(routerProps) => <BlogPostDetail {...routerProps} />} />
                    <Route path="/blog" render={(routerProps) => <Blog {...routerProps} />} />
                    <Route path="/(login|admin)" render={(routerProps) => <Login {...routerProps} />} />
                </Switch >

                {/* Footer */}
                < Footer />
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.home,
        // router: state.router
    };
};

const withConnect = connect(mapStateToProps, {
    fetchCurrentUser,
    checkAuthentication

});


export default compose(withConnect)(App);
