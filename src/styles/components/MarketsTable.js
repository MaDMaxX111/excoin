import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Table from '@material-ui/core/Table';

export const StyledWrapMarketsTable = styled.div`
  padding: ${props => props.theme.spacing(15,0)};
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
      & .MuiButtonBase-root {
        border: 1px solid ${props => props.theme.palette.primary.lightGrey};
        border-bottom-color: ${props => props.theme.palette.border.lightBlue};
        padding: ${props => props.theme.spacing(2,9)};
        color: ${props => props.theme.palette.primary.darkBlue};
        line-height: 3;
        font-size: 15px;
        opacity: 1;
        font-weight: bold;
        text-transform: none;
        max-width: unset;
        transition: ${props => props.theme.transition.main};
        & .MuiTab-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          & .svg-inline--fa {
            margin-right: ${props => props.theme.spacing(7)}px;
          }
        }
        & .MuiTouchRipple-root {
          display: none;
        }
        &:not(:first-of-type) {
          border-left-color: transparent;
        }
        &:first-of-type {
          border-top-left-radius: ${props => props.theme.spacing(1)}px;
        }
        &:last-of-type {
          padding: ${props => props.theme.spacing(2,4,2,1)};
          border-top-right-radius: ${props => props.theme.spacing(1)}px;
          flex: 1;
        }
        &.Mui-selected {
          color: ${props => props.theme.palette.primary.textHoverBlue};
          border-left: 1px solid;
          border-color: ${props => props.theme.palette.border.lightBlue};
          border-bottom-color: transparent;
          background-color: ${props => props.theme.palette.background.lightGrey};
          & .MuiInputBase-input {
            background-color: ${props => props.theme.palette.background.lightGrey};
            color: ${props => props.theme.palette.primary.textHoverBlue};
          }
        }
        & .MuiTextField-root {
          & label {
            top: 0;
            bottom: 0;
            position: absolute;
            transform: translateY(25%);
            font-weight: bold;
          }
          & .MuiInputBase-input {
            padding: ${props => props.theme.spacing(1, 5)};
          }
        }
        
      }
      & .indicator {
        display: none;
      }
  }
`;

export const StyledWrapTable = styled(Table)`
  border: 1px solid ${props => props.theme.palette.border.lightBlue};
  border-top: none;
  & .svg-inline--fa {
    cursor: pointer;
  }
  & .orange {
    color: ${props => props.theme.palette.common.orange};
  }
  & .MuiTableRow-head {
    background-color: ${props => props.theme.palette.background.lightGrey};
    & .MuiTableCell-head {
      text-align: left;
      font-size: 14px;
      color: ${props => props.theme.palette.primary.tableGrey};
      line-height: 1.57;
      padding-top: ${props => props.theme.spacing(4)}px;
      padding-bottom: ${props => props.theme.spacing(3)}px;
      padding-left: ${props => props.theme.spacing(1)}px;
    }
  }
  & .MuiTableCell-body, & .MuiTableCell-head {
    border-color: ${props => props.theme.palette.primary.lightGrey};
  }
  & .MuiTableRow-root {
    &:hover {
      background-color: ${props => props.theme.palette.background.lightGrey};
    }
    &:last-of-type {
      & .MuiTableCell-body {
        border-bottom: none;
      }
    }
  }
  & .MuiTableCell-body {
      padding-top: ${props => props.theme.spacing(5)}px;
      padding-bottom: ${props => props.theme.spacing(5)}px;
      padding-left: ${props => props.theme.spacing(1)}px;
      color: ${props => props.theme.palette.primary.tableDarkGrey};
      font-weight: 600;
      &.pair {
        font-weight: 400;
      }
      &.favorite {
        text-align: center;
        padding-left: ${props => props.theme.spacing(4)}px;
        padding-right: ${props => props.theme.spacing(4)}px;
      }
      & .high {
          color: ${props => props.theme.palette.common.green};
      }
      & .low {
          color: ${props => props.theme.palette.common.red};
      }
  }
`;
