import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {buttonText} from '../cssHelpers';
import { LinkButton } from './Common';
export const StyledWrapMainBanner = styled.div`
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100%;
  background-color: ${props => props.theme.palette.background.main};
  background-image: url("${props => props.backgroundImage}");
  padding: ${props => props.theme.spacing(49, 0, 10, 0)};
  position: relative;
  & h2{
    margin-bottom: ${props => props.theme.spacing(7)}px;
  }
  & p{
    text-align: center;
    padding: ${props => props.theme.spacing(0, 75)};
    margin-bottom: ${props => props.theme.spacing(15)}px;
  }
  
  ${props => props.theme.breakpoints.down('md')} {
    & .MuiContainer-root > .MuiGrid-container {
      flex-direction: column;
    }
    text-align: center;
    & h2 {
      font-size: 36px;
    }
    & p {
      padding: ${props => props.theme.spacing(0, 2)};
    }
  }
`;

export const StyledWrapForm = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing(0, 75)};
  margin-bottom: ${props => props.theme.spacing(26)}px;
  form {
    display: flex;
    .MuiTextField-root {
      flex: 1;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
  ${props => props.theme.breakpoints.down('md')} {
    padding: ${props => props.theme.spacing(0, 20)};
    width: 100%;
  }
  ${props => props.theme.breakpoints.down('xs')} {
    width: 100%;
    padding: 0;
    margin-bottom: ${props => props.theme.spacing(10)}px;
    form {
      display: flex;
      flex-direction: column;
      .MuiTextField-root {
        margin-bottom: ${props => props.theme.spacing(8)}px;
        border-radius: 4px;
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    background-color: ${props => props.theme.palette.background.lightBlue};
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding: ${props => props.theme.spacing(0, 8)};
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
  ${props => props.theme.breakpoints.down('xs')} {
    &.MuiButtonBase-root {
      padding: ${props => props.theme.spacing(3, 5)};
      align-self: center;
      border-radius: 4px;
    }
  }
`;

export const StyledWrapCharts = styled.div`
  margin-bottom: ${props => props.theme.spacing(10)}px;
`;
export const StyledWrapChart = styled.div`
  border-radius: ${props => props.theme.spacing(1)}px;
  background-color: ${props => props.theme.palette.background.defaultTransparent};
  display: flex;
  flex-direction: row;
  padding: ${props => props.theme.spacing(5, 3, 5, 3.5)};
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
  ${props => props.theme.breakpoints.down('md')} {
    text-align: left;
    & .caption {
      & .title {
        margin-bottom: ${props => props.theme.spacing(4)}px;
      }
    }
  }
`;

export const StyledWrapNews = styled.div`  
  display: flex;
  .marquee {
    display: flex;
    max-width:100%;
    white-space:nowrap;
    overflow:hidden;
    margin: ${props => props.theme.spacing(0,4)};
    & span {
        display:inline-flex;
        align-items: center;
        animation: marquee ${props => props.animateWidth / 5}s linear infinite;
        animation-play-state: ${props => props.playAnimate ? 'running' : 'paused'};
        & a {
          transition: ${props => props.theme.transition.main};
          color: ${props => props.theme.palette.primary.text};
          font-size: 15px;
          cursor: pointer;
          margin-right: ${props => props.theme.spacing(15)}px;
          &.active, &:hover {
              font-weight: bold;
              text-decoration: none;
          } 
        }
    }
    &:hover span{
       animation-play-state: paused;
    }
  }

  @keyframes marquee{
    0%{transform: translateX(0);}
    100%{transform: translateX(-100%)}
  }
  
  ${props => props.theme.breakpoints.down('xs')} {
    flex-direction: column-reverse;
    & ${LinkButton} {
      align-self: center;
    }
    .marquee {
      margin: ${props => props.theme.spacing(0,0,5,0)};
      & span {
        animation-duration: ${props => props.animateWidth / 2}s;
      }
    }
  }
`;
