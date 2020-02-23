import React, { Component } from 'react';
import styled from 'styled-components';
import { Tabs, Tab, Paper } from '@material-ui/core';
import { compose } from "redux";
import { connect } from "react-redux";

import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Profile from './component/Profile'
import CreatePost from './component/CreatePost'
import { fetchPostCategories, createPost } from './action'
import { checkAuthentication } from '../login/action';
import { OrangeButton } from 'components/common/components/Button'


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 0
        }
    }
    componentDidMount() {
        const auth_token = localStorage.getItem('auth_token');
        if (!auth_token) {
            this.handleLogout();
            return;
        } else {
            /* check authentication */
            this.props.checkAuthentication();
        }
        this.props.fetchPostCategories();
    }
    handleChange = (e, newValue) => {
        e.preventDefault();
        this.setState({
            selectedValue: newValue
        })
    }
    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/');
    }
    render() {
        const { postCategories, post_created } = this.props.admin;
        const { loggedIn } = this.props.login;
        /*  redirect to home page if not logged in */
        if (!loggedIn) {
            this.handleLogout();
            return <p />;
        }
        return (
            <ComponentWrapper>
                {/* Tab menu */}
                <Paper elevation={3}>
                    <div style={{ position: 'relative' }}>
                        <Tabs
                            value={this.state.selectedValue}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleChange}
                        >
                            <Tab label="Profile" />
                            <Tab label="Posts" />
                            <Tab label="More" />
                            <OrangeButton
                                Primary={true}
                                style={{
                                    backgroundColor: '#f65314',
                                    position: 'relative',
                                    padding: '5px',
                                    fontSize: '16px',
                                    position: 'absolute',
                                    right: '30px',
                                    top: '5px',
                                    textTransform: 'capitalize'
                                }}
                                onClick={this.handleLogout}
                            >
                                Logout
                            </OrangeButton>
                        </Tabs>
                    </div>
                </Paper>

                <Wrapper>
                    {
                        this.state.selectedValue === 0
                            ? <Profile />
                            : this.state.selectedValue === 1
                                ? <CreatePost
                                    postCategories={postCategories}
                                    createPost={this.props.createPost}
                                    post_created={post_created}
                                />
                                : 'Noooo'
                    }
                </Wrapper>
            </ComponentWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        app: state.home,
        admin: state.admin,
        router: state.router,
        login: state.login,
    };
};

const withConnect = connect(mapStateToProps, {
    fetchPostCategories,
    createPost,
    checkAuthentication
});


export default compose(withConnect)(Admin);
const Wrapper = styled.div`
    margin: 20px auto;
`;