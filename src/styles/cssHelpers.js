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
  }
`
export const footerLink = css`
  & a {
    display: block;
    transition: ${props => props.theme.transition.main};
    color: ${props => props.theme.palette.primary.textHover};
    font-weight: 300;
    font-size: 15px;
    cursor: pointer;
    margin: ${props => props.theme.spacing(4,0)};
    &.active, &:hover {
      color: ${props => props.theme.palette.primary.text};
      text-decoration: none;
    }
  }
`
