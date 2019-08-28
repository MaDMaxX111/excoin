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
    margin: ${props => props.theme.spacing(0, 0, 5)};
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
  
  //TextField
  .MuiTextField-root {
  
    background-color: ${props => props.theme.palette.background.default}
    border-radius: ${props => props.theme.spacing(1)}px;
    
    & .MuiInput-underline, &.Mui-focused {
      &:before {
        border: none;
      }
      &:after {
        border: none;
      }
      &:hover {
        &:before {
          border: none;          
        }
      }
    }
    & label {
      padding: ${props => props.theme.spacing(0,5)};
      transform: translate(0, ${props => props.theme.spacing(5)}px) scale(1);
      + .MuiInput-formControl {
        margin: 0;
      }
    }
    
    & label.Mui-focused, & label.MuiFormLabel-filled {
      color: green;
      max-height: 0;
      overflow: hidden;
    }
    
    & .MuiInputBase-input {
      padding: ${props => props.theme.spacing(4.5,5)};
    }
    
    & .MuiOutlinedInput-root {
      fieldset {
        border: none;
      }
    }
    
    & .MuiFormHelperText-root {
      position: absolute;
      top: 100%;
      padding: 0;
      margin: ${props => props.theme.spacing(1.5,0)};
    }
  }
`;

export const buttonText = css`
  color: ${props => props.theme.palette.primary.text};
  font-size: 15px;
  text-transform: none;
  font-weight: 700;
`;
