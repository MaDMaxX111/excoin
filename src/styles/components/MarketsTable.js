import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';

import Button from '@material-ui/core/Button';
import {buttonText} from '../cssHelpers';
import { LinkButton } from './Common';

export const StyledWrapMarketsTable = styled.div`
  //height: 500px;
  border: 1px solid red;
  padding: 20px;
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
      & .MuiButtonBase-root {
        border: 1px solid ${props => props.theme.palette.primary.lightGrey};
        padding: ${props => props.theme.spacing(2,9)};
        color: ${props => props.theme.palette.primary.darkBlue};
        line-height: 3;
        font-size: 15px;
        opacity: 1;
        font-weight: bold;
        text-transform: none; 
        &:not(:first-of-type) {
          border-left: none;
        }
      }
      & .indicator {
        display: none;
      }
  }
`;
