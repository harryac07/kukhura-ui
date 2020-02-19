import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { compose } from "redux";
import { connect } from "react-redux";

import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Profile from './component/Profile'
import CreatePost from './component/CreatePost'
import { fetchPostCategories, createPost } from './action'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 0
        }
    }
    componentDidMount() {
        this.props.fetchPostCategories();
    }
    handleChange = (e, newValue) => {
        e.preventDefault();
        this.setState({
            selectedValue: newValue
        })
    }
    render() {
        const { postCategories } = this.props.admin;
        return (
            <ComponentWrapper>
                {/* Tab menu */}
                <Paper elevation={3}>
                    <Tabs
                        value={this.state.selectedValue}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                    >
                        <Tab label="Profile" />
                        <Tab label="Posts" />
                        <Tab label="More" />
                    </Tabs>
                </Paper>

                <Wrapper>
                    {
                        this.state.selectedValue === 0
                            ? <Profile />
                            : this.state.selectedValue === 1
                                ? <CreatePost 
                                    postCategories={postCategories} 
                                    createPost={this.props.createPost}
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
    };
};

const withConnect = connect(mapStateToProps, {
    fetchPostCategories,
    createPost
});


export default compose(withConnect)(Admin);
const Wrapper = styled.div`
    margin: 20px auto;
`;