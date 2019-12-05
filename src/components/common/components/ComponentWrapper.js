import React from 'react'
import { WrapperDiv } from 'components/common/commonStyle'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#f0f0f0',
  },
}));
/**
 * ComponentWrapper
 * @param {node}children - children node
 */
const ComponentWrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
        {children}
      </WrapperDiv>
    </div>
  );
}
ComponentWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
export default ComponentWrapper;