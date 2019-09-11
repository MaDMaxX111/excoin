import styled from 'styled-components';
import { StyledWrapTitle } from './Common';

export const StyledWrapLatestNews = styled.div`
  padding: ${props => props.theme.spacing(15,0)};
  ${StyledWrapTitle} {
    margin-bottom: ${props => props.theme.spacing(12)}px;
  }
  ${props => props.theme.breakpoints.down('xs')} {
    padding: ${props => props.theme.spacing(7,0)};
    ${StyledWrapTitle} {
      margin-bottom: ${props => props.theme.spacing(6)}px;
    }
  }
`;

export const StyledWrapNews = styled.div`
  margin-bottom: ${props => props.theme.spacing(16)}px;
  box-shadow: ${props => props.theme.boxShadow.big};
  padding: ${props => props.theme.spacing(9,7)};
  transition: ${props => props.theme.transition.main};
  border-radius: ${props => props.theme.spacing(1)}px;
  & > h4 {
    margin: ${props => props.theme.spacing(1,0,5,0)};
    font-weight: bold;
    font-size: 18px;
  }
  & > p {
    font-weight: 600;
    margin: ${props => props.theme.spacing(1,0)};
    line-height: 1.9;
    margin-bottom: ${props => props.theme.spacing(5)}px;
  }
  
  ${props => props.theme.breakpoints.down('md')} {
    margin-bottom: ${props => props.theme.spacing(0)}px;
  }
`;
