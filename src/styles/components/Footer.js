import styled from 'styled-components';
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from '@material-ui/core/Toolbar';
// import Popper from '@material-ui/core/Popper';
// import { baseLink } from '../cssHelpers';


export const StyledFooter = styled.footer`
  color: ${props => props.theme.palette.primary.text};
  background-color: ${props => props.theme.palette.background.blueFooter};
  min-height: 110px;
  display: flex;
  justify-content: center;
`;
