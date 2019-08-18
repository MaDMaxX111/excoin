import styled, { css } from 'styled-components';
import AppBar from "@material-ui/core/AppBar";
import Popper from '@material-ui/core/Popper';
import { baseLink, footerLink } from '../cssHelpers';


export const StyledAppBar = styled(AppBar)`
  border-bottom: 1px solid ${props => props.theme.palette.background.blue};
  min-height: 110px;
  display: flex;
  justify-content: center;
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 36px;
  font-weight: 500;
  & span {
    margin: ${props => props.theme.spacing(0, 2)};
  }
`

export const StyledNav = styled.nav`
  ${props => props.direction === 'row' ? baseLink : footerLink}
`

export const StyledNavigationButtonsContainer = styled.div`
  ${baseLink}
  & a {
   border-radius: ${props => props.theme.spacing(1)}px;
   padding: ${props => props.theme.spacing(2, 5)};
   margin-right: ${props => props.theme.spacing(0)}px;
   border: 1px solid transparent;
  }
  & a:hover {
   border: 1px solid ${props => props.theme.palette.border.blue};
   background-color: ${props => props.theme.palette.background.blue};
   color: inherit;
  }
  
  & .language-switcher {
    & .svg-inline--fa {
      vertical-align: -0.15em;
    }
    & span {
      margin-left: ${props => props.theme.spacing(2)}px;
    }
  }
`

export const StyledPopper = styled(Popper)`
  &:before {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: -40px;
    bottom: 0px;
  }
`
