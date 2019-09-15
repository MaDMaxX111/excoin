import styled from 'styled-components';

export const StyledWrapFeatures = styled.div`
  padding: ${props => props.theme.spacing(3,0)};
  ${props => props.theme.breakpoints.down('md')} {
    padding: ${props => props.theme.spacing(1,0)};
  }
`;
