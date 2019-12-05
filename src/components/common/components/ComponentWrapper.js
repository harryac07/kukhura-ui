import React from 'react'
import { WrapperDiv } from 'components/common/commonStyle'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: props => props.backgroundColor ? props.backgroundColor : '#fff',
    color: props => props.color
  },
}));
/**
 * ComponentWrapper
 * @param {node}children - children node
 */
const ComponentWrapper = ({ children, backgroundColor, color }) => {
  const classes = useStyles({ backgroundColor, color });
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