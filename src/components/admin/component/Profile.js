import React, { useState } from 'react'
import styled from 'styled-components'
import Title from 'components/common/components/Title'
import UpdateProfile from './UpdateProfile'

import { Grid, Button } from '@material-ui/core';

const Profile = (props) => {
    // hooks
    const [editProfile, onEditProfile] = useState(false);

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('user_id');

    if (editProfile) {
        return <UpdateProfile cancelUpdate={onEditProfile} />
    }
    return (
        <div>
            <Title fontSize={"28px"} text={"Profile"} />
            <Grid container spacing={3}>
                <Grid container item xs={6} sm={6} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={4} sm={4} md={4}>
                            Username
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            {username}
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4} sm={4} md={4}>
                            Email
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            {email}
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4} sm={4} md={4}>
                            User Id
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            {id}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <UserNote>
                <i>
                    Note: The information is shown only to you. Please do not share your username.
                </i>
            </UserNote>
            <Button
                color={"primary"}
                variant={"contained"}
                onClick={() => onEditProfile(true)}
            >
                Update your information
            </Button>
        </div>
    )
}

export default Profile;

const UserNote = styled.p`
    margin: 40px auto;
`;

