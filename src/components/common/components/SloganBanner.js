import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const SloganDiv = styled.div`
  background-image: ${props => props.bgImageUrl ? props.bgImageUrl : ''};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  h2{
    font-weight: inherit;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

/**
 * SloganBanner
 * @param {String}bgImageUrl - background image url
 */
const SloganBanner = ({ bgImageUrl, sloganText, textSizeLevel }) => {
  const variantLevel = textSizeLevel || 2
  return (
    <SloganDiv bgImageUrl={`url("${bgImageUrl}")`}>
      <Typography variant={`h${variantLevel}`}>
        {sloganText}
      </Typography>
    </SloganDiv>
  );
}
SloganBanner.propTypes = {
  bgImageUrl: PropTypes.string,
  sloganText: PropTypes.string,
  textSizeLevel: PropTypes.number || PropTypes.string
};
export default SloganBanner;