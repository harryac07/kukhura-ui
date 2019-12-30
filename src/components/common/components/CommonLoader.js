import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

const CommonLoader = ({ showLoader = false, height, width, type }) => {
    return (
        <Loader
            visible={showLoader}
            type="ThreeDots"
            color="#f65314"
            height={500}
            width={'5%'}
            timeout={0}
            style={{
                position: 'relative',
                left: '47%'
            }}
        />
    );
}

CommonLoader.propTypes = {
    showLoader: PropTypes.bool,
    height: PropTypes.string,
    width: PropTypes.string,
    type: PropTypes.string,
}
export default CommonLoader;