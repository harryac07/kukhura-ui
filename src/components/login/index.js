import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import LoginForm from './component/LoginForm'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'
import { authenticateUser } from './action'

class Login extends Component {
    constructor(props) {
        super(props);
    }
    handleLogin = (credentials) => {
        this.props.authenticateUser(credentials);
    }
    render() {
        const { router, login } = this.props;
        const { loggedIn } = login;
        if (loggedIn) {
            this.props.history.push('/')
            // return;
        }
        return (
            <div>
                {/* Login form */}
                <LoginForm handleLogin={this.handleLogin} />

                <Divider />

                {/* Slogan banner */}
                <SloganBanner
                    bgImageUrl="https://dummyimage.com/1200x300/cccccc/000.jpg"
                    sloganText="Consume fresh egg everyday! Quality can't be compromised."
                    textSizeLevel={2}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        router: state.router
    };
};

const withConnect = connect(mapStateToProps, {
    authenticateUser
});


export default compose(withRouter, withConnect)(Login);
