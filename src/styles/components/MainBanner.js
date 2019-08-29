import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { buttonText, baseLink } from '../cssHelpers';

export const StaledWrapMainBanner = styled.div`
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100%;
  background-color: ${props => props.theme.palette.background.main};
  background-image: url("${props => props.backgroundImage}");
  padding: ${props => props.theme.spacing(49,0,7,0)};
  & h2{
    margin-bottom: ${props => props.theme.spacing(7)}px;
  }
  & p{
    text-align: center;
    padding: ${props => props.theme.spacing(0,75)};
    margin-bottom: ${props => props.theme.spacing(15)}px;
  }
`;

export const StaledWrapForm = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing(0,75)};
  margin-bottom: ${props => props.theme.spacing(26)}px;
  form {
    display: flex;
    .MuiTextField-root {
      flex: 1;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  } 
`;

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    background-color: ${props => props.theme.palette.background.lightBlue};
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding: ${props => props.theme.spacing(0,8)};
    &:hover {
      background-color: ${props => props.theme.palette.background.blue};
    }
    &.Mui-disabled {
      opacity: 0.7;
    }
  }
  & .MuiButton-label {
    ${buttonText}
  }
  display: none;!important;
  border: 1px solid red;!important;
`;

export const StaledWrapCharts = styled.div`
  margin-bottom: ${props => props.theme.spacing(7)}px;
`;
export const StaledWrapChart = styled.div`
  border-radius: ${props => props.theme.spacing(1)}px;
  background-color: ${props => props.theme.palette.background.defaultTransparent};
  display: flex;
  flex-direction: row;
  padding: ${props => props.theme.spacing(5,3,5,3.5)};
  color: ${props => props.theme.palette.primary.text};
  & .caption {
    font-weight: bold;
    width: 75%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    & .title {
      font-size: 14px;
      letter-spacing: 1px;
      margin-bottom: ${props => props.theme.spacing(7)}px;
    }
    & .valuerate {
      width: 100%;
      font-size: 14px;
      letter-spacing: 1px;
      margin-bottom: ${props => props.theme.spacing(2)}px;
      line-height: 1;
      & .value {
        color: ${props => props.low ? props.theme.palette.common.red : props.theme.palette.common.green};
        margin-right: ${props => props.theme.spacing(2)}px;     
      }
      & .rate {
        font-size: 12px; 
      }
    }
    & .volume {
      font-size: 12px;
    }
  }
  & .chart {
    flex: 1;
  }
`;

export const StaledWrapNews = styled.div`  
  display: flex;
  
  & .MuiTypography-body1 {
    margin: 0;
    padding: 0;
    overflow-style: marquee-block; 
marquee-play-count: infinite; 
marquee-speed: slow;
marquee-style: scroll;
marquee-direction: reverse;
  }
`;
