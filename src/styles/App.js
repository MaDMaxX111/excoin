import styled from "styled-components";

export const AppStyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  & > .content {
    flex: 1;
  }
  background-color: ${props => props.theme.palette.background.default};
`;
