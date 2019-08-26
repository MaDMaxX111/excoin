import styled from 'styled-components';

export const StaledWrapMainBanner = styled.div`
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100%;
  background-color: ${props => props.theme.palette.background.main};
  background-image: url("${props => props.backgroundImage}");
  height: 4000px;
  padding: ${props => props.theme.spacing(49,0,0,0)};
  & h2{
    margin-bottom: ${props => props.theme.spacing(7)}px;
  }
  & p{
    text-align: center;
    padding: ${props => props.theme.spacing(0,75)};
    margin-bottom: ${props => props.theme.spacing(7)}px;
  }
`;
