import styled from 'styled-components';
import { baseLink } from '../cssHelpers';


export const StyledFooter = styled.footer`
  color: ${props => props.theme.palette.primary.text};
  background-color: ${props => props.theme.palette.background.blueFooter};
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.spacing(28, 0, 0, 0)};
`;

export const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  color: ${props => props.theme.palette.primary.textHover};
  font-weight: 300;
  font-size: 15px;
  & > a {
    margin-left: ${props => props.theme.spacing(2)}px;
  }
  ${baseLink};
`;

export const StyledSocialButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  & > a {
    transition: ${props => props.theme.transition.main};
    display: inline-block;
    margin: ${props => props.theme.spacing(0,8,0,0)};
    font-size: 18px;
    color: ${props => props.theme.palette.primary.text};
    &:hover {
      color: ${props => props.theme.palette.primary.textHoverBlue};
      text-decoration: none;
    }
  }
`;

export const StyledCopyRight = styled.div`
  border-top: 1px solid ${props => props.theme.palette.border.darkblue};
  margin-top: ${props => props.theme.spacing(28)}px;
  min-height: 110px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.primary.textHover};
  font-weight: 400;
  font-size: 15px;
`;
