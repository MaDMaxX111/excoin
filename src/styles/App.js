import styled from "styled-components";
import { marginRightMinus4, formStyle } from  './cssHelpers'
export const AppStyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  & > .content {
    flex: 1;
  }
  background-color: ${props => props.theme.palette.background.default};
  ${marginRightMinus4};
  ${formStyle};
`;

export const ContentWrap = styled.main`
  flex: 1;
`;
