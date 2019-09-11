import styled from 'styled-components';
import { StyledWrapTitle } from './Common';
import { LinkButton } from "../../styles/components/Common";

export const StyledWrapOurWallets = styled.div`
  padding: ${props => props.theme.spacing(15,0)};
  ${StyledWrapTitle} {
    margin-bottom: ${props => props.theme.spacing(9)}px;
  }
  ${props => props.theme.breakpoints.down('xs')} {
    padding: ${props => props.theme.spacing(7,0)};
  }
`;

export const StyledWrapBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(4)}px;
  & img {
    margin-bottom: ${props => props.theme.spacing(8)}px;
  }
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.theme.palette.primary.textGrey};
  & p {
    font-weight: bold;
    margin-top: ${props => props.theme.spacing(0)}px;
    margin-bottom: ${props => props.theme.spacing(2)}px;
    text-align: center;
    &:last-of-type {
      color: ${props => props.theme.palette.primary.textHoverBlue};
    }
  }
`;
export const StyledWrapDownloadForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & .MuiFormGroup-root {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: ${props => props.theme.spacing(12)}px;
    & .MuiFormControlLabel-root {
      margin: ${props => props.theme.spacing(5,0,0)};
      padding: 0;
      display: flex;
      flex-direction: column;
      & .MuiButtonBase-root {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid ${props => props.theme.palette.primary.textLightGrey};
        margin-left: ${props => props.theme.spacing(6)}px;
        margin-right: ${props => props.theme.spacing(6)}px;
        margin-bottom: ${props => props.theme.spacing(3)}px;;
        & .MuiIconButton-label {
          color: ${props => props.theme.palette.primary.darkBlue};
          font-size: 28px;
        }
        &:hover, &.Mui-checked {
          background-color: ${props => props.theme.palette.primary.textHoverBlue};
          border-color: transparent;
          & .MuiIconButton-label {
            color: ${props => props.theme.palette.primary.text};
          }
        }
      }
      & .MuiFormControlLabel-label {
         color: ${props => props.theme.palette.primary.textGrey};
         font-size: 15px;
         font-weight: bold;
      }
    }
  }
  ${LinkButton} {
    text-transform: capitalize;
    border: none;
    background-color: ${props => props.theme.palette.primary.textHoverBlue};
    padding: ${props => props.theme.spacing(5, 12)};
  }
`;
