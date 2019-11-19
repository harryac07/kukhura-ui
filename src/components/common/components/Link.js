import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: ${props => props.inlineBlock ? 'inline-block' : props.block ? 'block': 'inline'};
  color: #00a1f1;
  :hover {
    color: red;
  }
`;