import { css } from 'styled-components';

export const baseLink = css`
  & a {
    transition: ${props => props.theme.transition.main};
    color: ${props => props.theme.palette.primary.text};
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    margin-right: ${props => props.theme.spacing(10)}px;
    &.active, &:hover {
      color: ${props => props.theme.palette.primary.textHover};
      text-decoration: none;
    }
    ${props => props.theme.breakpoints.down('md')} {
      margin-right: ${props => props.theme.spacing(5)}px;
    }
  }
`
export const footerLink = css`
  & > a {
    display: block;
    transition: ${props => props.theme.transition.main};
    color: ${props => props.theme.palette.primary.textHover};
    font-weight: 300;
    font-size: 15px;
    cursor: pointer;
    margin: ${props => props.theme.spacing(0,0,5)};
    &.active, &:hover {
      color: ${props => props.theme.palette.primary.text};
      text-decoration: none;
    }
  }
  & > a:last-of-type {
    margin: ${props => props.theme.spacing(0)};
  } 
`

export const marginLeftMinus4 = css`
  .ml-4 {
    margin-left: -${props => props.theme.spacing(4)}px;
  }
`;

export const marginRightMinus4 = css`
  .mr-4 {
    margin-right: -${props => props.theme.spacing(4)}px;
  }
`;

export const mobileNav = css`
  margin: ${props => props.theme.spacing(8, 0)};
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  & > a {
    display: block;
    padding: ${props => props.theme.spacing(1.5, 2, 1.5, 8)};
    color: ${props => props.theme.palette.primary.textBlack};
    &:hover, .active {
      color: ${props => props.theme.palette.primary.textHoverBlue};
      text-decoration: none;
    }
  }
`;

export const formStyle = css`
  //.MuiInputLabel-shrink {
  //  display: none;
  //}
`;
