import styled from 'styled-components';
import { AppBar } from "@material-ui/core";

export const StyledAppBar = styled(AppBar)`

`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 500;
  & span {
    margin: ${props => props.theme.spacing(0,2)};
  }
`
