import styled from 'styled-components';
import Link from "@material-ui/core/Link";

export const LinkButton = styled(Link)`
    &.MuiLink-root {
        transition: ${props => props.theme.transition.main};
        color: ${props => props.theme.palette.primary.text};
        font-weight: bold;
        font-size: 15px;
        border-radius: ${props => props.theme.spacing(2)}px;
        padding: ${props => props.theme.spacing(1.5, 2.5)};
        cursor: pointer;
        border: 1px solid ${props => props.theme.palette.border.blue};
        ${props => props.disabled && `cursor: none; pointer-events: none; opacity: 0.6`}
        &.active, &:hover {
          background-color: ${props => props.theme.palette.background.blue};
          text-decoration: none;   
        }
    }
`;

export const StyledWrapTitle = styled.div`
  color: ${props => props.theme.palette.primary.textGrey};
  text-align: center;
  text-transform: uppercase;
  position:relative;
  & h3 {
    font-size: 16px;
    font-weight: bold;
    display: inline;
    position:relative;
    z-index: 1;
    padding: ${props => props.theme.spacing(0, 8)};
    background: ${props => props.theme.palette.primary.text};
    color: #5f5f5f;
  }
  &:before {
    z-index: 0;
    content: '';
    background-color: ${props => props.theme.palette.primary.textLightGrey};
    width: 100%;
    height: 1px;
    position:absolute;
    left: 0;
    top: 50%;
  }
`;
