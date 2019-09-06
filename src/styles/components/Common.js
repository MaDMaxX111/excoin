import styled from 'styled-components';
import Link from "@material-ui/core/Link";

export const LinkButton = styled(Link)`
    &.MuiLink-root {
        transition: ${props => props.theme.transition.main};
        color: ${props => props.theme.palette.primary.text};
        font-weight: bold;
        font-size: 15px;
        border-radius: ${props => props.theme.spacing(2)}px;
        padding: ${props => props.theme.spacing(1.5, 2.5)};
        cursor: pointer;
        border: 1px solid ${props => props.theme.palette.border.blue};
        &.active, &:hover {
          background-color: ${props => props.theme.palette.background.blue};
          text-decoration: none;   
        }
    }
`;
