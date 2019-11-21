import style from 'styled-components'

export const H1 = style.h1`
  font-size: 32px;
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'}
`;
export const H2 = style.h2`
  font-size: 24px;
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'}
`;
export const H3 = style.h3`
  font-size: 18px;
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'}
`;
export const H4 = style.h4`
  font-size: 16px;
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'}
`;
export const H5 = style.h5`
  font-size: 13px;
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'}
`;
export const P = style.p`
  justify-content: center;
  font-weight:${props => props.bold ? 'bold' : 'normal'};
  display:${props => props.inlineBlock ? 'inline-block' : props.flex ? 'flex' : 'block'};
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  text-align: ${props => props.center ? 'center' : props.right ? 'right' : 'left'};
  width: ${props => props.width ? props.width : '100%'};
  margin-top: 0;
  padding: ${props => props.padding ? props.padding : '0px'};
  color: ${props => props.color ? props.color : '#000'};
`;
export const WrapperDiv = style.div`
  margin: 0px 250px;
  display:${props => props.inlineBlock ? 'inline-block' : props.flex ? 'flex' : 'block'};
  align-items: center;

  @media (max-width: 1280px) {
    margin: 0px 20px;
  }
`;
export const Div = style.div`
  align-items: center;
  display: ${props => props.inlineBlock ? 'inline-block' : props.flex ? 'flex' : 'block'};
  width: ${props => props.width ? props.width : null};

  @media (max-width: 1280px) {
    width: ${props => props.width ? props.width : '100%'};
  }
`;

export const ButtonPrimary = style.button`
  display: inline-block;
  padding: 12px 25px;
  background: #1976d2;
  color: #fff;
  font-size: 22px;
  line-height: 30px;
  font-weight: 300px;
  border: 0;
  border-radius: 0;
`;
export const ButtonOrange = style.button`
    display: inline-block;
    padding: 12px 25px;
    background: #f65314;
    color: #fff;
    font-size: 22px;
    line-height: 30px;
    font-weight: 300;
`;