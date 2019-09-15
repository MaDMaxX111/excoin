import styled from 'styled-components';

export const StyledWrapCategories = styled.div`
  padding: ${props => props.theme.spacing(0,0,3,0)};
  & .MuiContainer-root > h3 {
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    color: ${props => props.theme.palette.primary.darkdarkBlue};
    margin-bottom: ${props => props.theme.spacing(7)}px;
  }
  & .MuiContainer-root > p {
    text-align: center;
    font-size: 15px;
    line-height: 1.6;
    color: ${props => props.theme.palette.primary.textGrey};
    padding: ${props => props.theme.spacing(0,75)};
    margin-bottom: ${props => props.theme.spacing(14)}px;
  }
  
  .MuiTabs-root {
    margin-bottom: ${props => props.theme.spacing(10)}px;
    .MuiTab-root {
      font-size: 18px;
      color: ${props => props.theme.palette.primary.darkBlue};
      text-transform: none;
      font-weight: bold;
      border-bottom: 1px solid ${props => props.theme.palette.primary.textLightGrey};
      padding: ${props => props.theme.spacing(3.5,3.5)};
      transition: none;
      .MuiTouchRipple-root {
        display: none;
      }
      .MuiTab-wrapper {
        align-items: baseline;
      }
      &.Mui-selected {
        color: ${props => props.theme.palette.primary.textHoverBlue};
        box-shadow: 0px 16px 22px rgba(0,0,0,.03);
        border-bottom: none;
      }
    }
    .MuiTabs-indicator {
        display: none;
    }
  }
  ${props => props.theme.breakpoints.down('md')} {
    & .MuiContainer-root > p {
        padding: ${props => props.theme.spacing(0,2)};
        margin-bottom: ${props => props.theme.spacing(4)}px;
    }
    & .MuiTabs-root {
        & .MuiTab-root {
          max-width: unset;
          & .MuiTab-wrapper {
            align-items: center;
          }
        }
    }
  }
`;

export const StyledWrapperContent = styled.div`
  padding: ${props => props.theme.spacing(5, 0,5, 20)};
  ${props => props.theme.breakpoints.down('xs')} {
    padding: ${props => props.theme.spacing(0, 0,5, 2)};    
  }
`;

export const StyledContent = styled.div`
  img {
    margin-bottom: ${props => props.theme.spacing(2)}px;
  }
  p {
    font-size: 15px;
    line-height: 1.7;
    color: ${props => props.theme.palette.primary.textGrey};
    margin-bottom: ${props => props.theme.spacing(5)}px;
  }
  ul {
    font-size: 15px;
    line-height: 1.7;
    color: ${props => props.theme.palette.primary.textGrey};
    list-style: none;
    padding: 0;
    & li {
      display: flex;
      margin-bottom: ${props => props.theme.spacing(3)}px;
      span:first-of-type {
        color: ${props => props.theme.palette.primary.textHoverBlue};
        font-weight: bold;
        margin-right: ${props => props.theme.spacing(2.5)}px;
      }
    }
  }
`;

export const StyledImgWrap = styled.div`
  padding: ${props => props.theme.spacing(6, 13)};
`;
