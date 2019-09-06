import styled from 'styled-components';
import { LinkButton } from "./Common";

export const StaledWrapCallToAction = styled.div`
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100%;
  background-color: ${props => props.theme.palette.background.lightBlue};
  background-image: url("${props => props.backgroundImage}");
  padding: ${props => props.theme.spacing(22, 0, 24, 0)};
  ${props => props.theme.breakpoints.down('md')} {
    background-size: auto;
  }
`;

export const StaledWrapText = styled.div`
  text-align: left;
  color: ${props => props.theme.palette.primary.text};
  & > h2 {
    letter-spacing: 1px;
    margin: ${props => props.theme.spacing(0, 0, 3.5, 0)};
    font-size: 30px;
    font-weight: bold;
  }
  & > p {
    margin: 0;
    letter-spacing: 0.035em;
    text-align: left;
    padding: 0;
  }
  ${props => props.theme.breakpoints.down('md')} {
    margin-bottom: ${props => props.theme.spacing(5)}px;
    text-align: center;
    & > p {
      text-align: center;
    }
  }
`;

export const StyledWrapButton = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin: ${props => props.theme.spacing(1, 0)};
  ${LinkButton} {
    border: 2px solid ${props => props.theme.palette.background.defaultTransparent};
    background-color: ${props => props.theme.palette.background.defaultTransparent};
    padding: ${props => props.theme.spacing(5, 10)};
    &:hover {
      border-color: ${props => props.theme.palette.background.default};
      background-color: ${props => props.theme.palette.background.default};
      color: ${props => props.theme.palette.primary.textHoverBlue};
    }
  }
  
  ${props => props.theme.breakpoints.down('md')} {
    justify-content: center;
    ${LinkButton} {
      padding: ${props => props.theme.spacing(3, 3)};
    }
  }
`;

export const StyledWrapDelimeter = styled.div`
  border-radius: 50%;
  border: 1px solid ${props => props.theme.palette.background.defaultTransparent};
  color: ${props => props.theme.palette.primary.text};
  font-size: 15px;
  font-weight: bold;
  margin: ${props => props.theme.spacing(0, 3)};
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 30px;
`;