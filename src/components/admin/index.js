import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Profile from './component/Profile'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 0
        }
    }
    handleChange = (e, newValue) => {
        e.preventDefault();
        this.setState({
            selectedValue: newValue
        })
    }
    render() {
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
                                ? 'World'
                                : 'Noooo'
                    }
                </Wrapper>
            </ComponentWrapper>
        )
    }
}

export default Admin;

const Wrapper = styled.div`
    margin: 20px auto;
`;