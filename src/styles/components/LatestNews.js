import styled from 'styled-components';
import { StyledWrapTitle } from './Common';

export const StyledWrapLatestNews = styled.div`
  padding: ${props => props.theme.spacing(30,0)};
  ${StyledWrapTitle} {
    margin-bottom: ${props => props.theme.spacing(14)}px;
  }
`;

export const StyledWrapNews = styled.div`
  box-shadow: ${props => props.theme.boxShadow.big};
  padding: ${props => props.theme.spacing(9,7,5)};
  transition: ${props => props.theme.transition.main};
  border-radius: ${props => props.theme.spacing(1)}px;
  & > h4 {
    margin: ${props => props.theme.spacing(4,0,3)};
    font-weight: bold;
    font-size: 18px;
  }
  & > p {
    font-weight: 600;
    margin: ${props => props.theme.spacing(1,0)};
    line-height: 1.9;
    margin-bottom: ${props => props.theme.spacing(5)}px;
  }
`;
